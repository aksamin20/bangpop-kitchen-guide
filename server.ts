import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { generateWithRotation } from "./src/server/ai.js";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for AI Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { prompt, context } = req.body;
      
      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }

      const systemInstruction = `You are an AI assistant for Kitchen Hand staff at BangPop Melbourne.
      Use the provided guideline context to answer the user's question.
      Keep your answers concise, practical, and strictly aligned with the kitchen guideline.
      If the answer is not in the guideline, say "I don't have information about that in the guideline."
      
      Guideline Context:
      ${context}
      `;

      const answer = await generateWithRotation(prompt, systemInstruction);
      res.json({ answer });
    } catch (error: any) {
      console.error("Error in /api/chat:", error);
      res.status(500).json({ error: error.message || "Failed to generate response" });
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
    // Serve static files in production
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
