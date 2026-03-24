import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import hpp from "hpp";
import { z } from "zod";

async function startServer() {
  // 9. Security: Validate environment variables
  const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    APP_URL: z.string().url().optional(),
    GEMINI_API_KEY: z.string().optional(),
  });

  const env = envSchema.safeParse(process.env);
  if (!env.success) {
    console.error("❌ Invalid environment variables:", env.error.format());
    process.exit(1);
  }

  const app = express();
  const PORT = 3000;

  // 1. Security: Remove X-Powered-By header to hide technology stack
  app.disable("x-powered-by");

  // 2. Security: Basic security headers with Helmet
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": ["'self'", "data:", "https://s1.directupload.eu", "https://i.postimg.cc", "https://images.unsplash.com", "https://picsum.photos", "https://www.google-analytics.com"],
        "script-src": ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com", "https://www.google-analytics.com"],
        "connect-src": ["'self'", "https://www.google-analytics.com", "https://stats.g.doubleclick.net", "https://region1.google-analytics.com"],
        "frame-ancestors": ["'self'", "https://ai.studio", "https://*.google.com", "https://*.run.app"], // Allow AI Studio and preview domains
        "object-src": ["'none'"],
        "base-uri": ["'self'"],
      },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
    frameguard: false, // Disable X-Frame-Options to allow iframe embedding
  }));

  // 3. Security: HTTP Parameter Pollution protection
  app.use(hpp());

  // 4. Security: Rate limiting to prevent Brute Force and DoS
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes",
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use("/api/", limiter);

  // 11. Security: No-cache for API responses
  app.use("/api/", (req, res, next) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    next();
  });

  // 12. Security: Strict Content-Type checking for POST requests
  app.use("/api/", (req, res, next) => {
    if (req.method === "POST" && !req.is("application/json")) {
      return res.status(415).json({ error: "Unsupported Media Type", message: "Content-Type must be application/json" });
    }
    next();
  });

  // 5. Security: CORS configuration - restrict to own origin in production
  const corsOptions = {
    origin: process.env.NODE_ENV === "production" 
      ? [process.env.APP_URL || "", "https://vamela.info"] 
      : true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    maxAge: 86400, // 24 hours
  };
  app.use(cors(corsOptions));

  // 6. Security: Request body size limit to prevent large payload attacks
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: true, limit: "10kb" }));

  // 7. Security: Permissions Policy
  app.use((req, res, next) => {
    res.setHeader(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=(), interest-cohort=()"
    );
    next();
  });

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      secure: req.secure || req.headers["x-forwarded-proto"] === "https"
    });
  });

  // Example of a secure API route with validation
  const contactSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    message: z.string().min(10).max(1000),
  });

  app.post("/api/contact", (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      // Process validated data...
      res.status(200).json({ message: "Success" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid input data", details: error.issues });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: '0.0.0.0',
        port: 3000
      },
      appType: "spa",
    });
    app.use(vite.middlewares);

    app.get('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        const fs = await import('fs');
        let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, {
      setHeaders: (res, path) => {
        if (path.endsWith('.html')) {
          res.setHeader('Cache-Control', 'no-cache');
        } else {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
      }
    }));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // 8. Security: Global Error Handler to prevent leaking sensitive info
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
      error: "An unexpected error occurred",
      message: process.env.NODE_ENV === "production" ? "Internal Server Error" : err.message
    });
  });

  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  // 10. Security: Graceful shutdown
  const shutdown = () => {
    console.log("Shutting down gracefully...");
    server.close(() => {
      console.log("Server closed.");
      process.exit(0);
    });
    
    // Force close after 10s
    setTimeout(() => {
      console.error("Could not close connections in time, forcefully shutting down");
      process.exit(1);
    }, 10000);
  };

  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}

startServer();
