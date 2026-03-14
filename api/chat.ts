import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from "@google/genai";

// Replicate the rotation logic for Vercel
const getKeys = () => {
  return [
    process.env.API_KEY_1,
    process.env.API_KEY_2,
    process.env.API_KEY_3,
    process.env.GEMINI_API_KEY,
  ].filter(Boolean) as string[];
};

let currentKeyIndex = 0;

const getNextKey = (keys: string[]) => {
  if (keys.length === 0) {
    throw new Error("No API keys configured.");
  }
  const key = keys[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % keys.length;
  return key;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

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

  const keys = getKeys();
  let lastError: any = null;

  for (let i = 0; i < Math.max(1, keys.length); i++) {
    try {
      const apiKey = getNextKey(keys);
      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.2,
        },
      });

      if (response.text) {
        return res.status(200).json({ answer: response.text });
      } else {
        throw new Error("Empty response from model");
      }
    } catch (error: any) {
      console.error(`Attempt ${i + 1} failed:`, error.message);
      lastError = error;
    }
  }

  return res.status(500).json({ error: `All API keys failed. Last error: ${lastError?.message || "Unknown error"}` });
}
