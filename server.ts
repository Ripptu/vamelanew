import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Security: Basic security headers
  if (process.env.NODE_ENV === "production") {
    console.log("Running in PRODUCTION mode");
    app.use(helmet({
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          "img-src": ["'self'", "data:", "https://s1.directupload.eu", "https://i.postimg.cc", "https://images.unsplash.com", "https://picsum.photos"],
          "script-src": ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com"],
          "connect-src": ["'self'", "https://www.google-analytics.com", "https://stats.g.doubleclick.net"],
        },
      },
    }));
  } else {
    console.log("Running in DEVELOPMENT mode");
  }

  // Security: Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: process.env.NODE_ENV === "production" ? 100 : 10000, // Very high in dev
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use("/api/", limiter);

  app.use(cors());
  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", env: process.env.NODE_ENV || "development" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    console.log("Initializing Vite dev server in DEVELOPMENT mode...");
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: '0.0.0.0',
        port: 3000
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite middleware attached.");

    // Explicitly serve index.html in dev mode
    app.get('*', async (req, res, next) => {
      const url = req.originalUrl;
      console.log(`Request for URL: ${url}`);
      try {
        const fs = await import('fs');
        let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        console.error(`Error serving index.html: ${e}`);
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    console.log("Serving static files from dist in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
