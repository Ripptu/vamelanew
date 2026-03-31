import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/generate", async (req, res) => {
    try {
      const { targetAudience, topic, tone } = req.body;

      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: "GEMINI_API_KEY is not set" });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

      const prompt = `Du bist ein professioneller SEO-Content-Creator und Stratege für die Webdesign-Agentur 'Vamela'. 
Dein Geschäftskontext: Du bietest als Senior Webdesign-Strategie-Partner & Creative Director professionelle Webdesign-Dienstleistungen an.
Zielgruppe für diesen Artikel: ${targetAudience}.
Thema: ${topic}.
Markenstimme: ${tone || 'professionell, lösungsorientiert, strategisch und kreativ'}.

Wichtige Vorgaben:
- Erwähne dezent und natürlich die Preise: ab 1.000 € pro Projekt oder als bequemes Abo-Modell für 99 € im Monat.
- Der Artikel soll organischen Traffic aufbauen und qualifizierte Leads generieren.
- Schreibe einen vollständigen, SEO-optimierten Blogartikel.
- Formatiere den Artikel in Markdown.
- Beginne mit einem packenden Meta-Titel (H1) und einer kurzen Meta-Beschreibung.
- Nutze H2 und H3 Überschriften.
- Beende den Artikel mit einem klaren Call-to-Action.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
      });

      res.json({ content: response.text });
    } catch (error) {
      console.error("Error generating content:", error);
      res.status(500).json({ error: "Failed to generate content" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
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
