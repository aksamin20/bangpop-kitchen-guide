import { GoogleGenAI } from "@google/genai";

/**
 * API Key Rotation System
 * 
 * This module manages a pool of Gemini API keys.
 * It reads 3 keys from environment variables: API_KEY_1, API_KEY_2, API_KEY_3.
 * It uses a round-robin approach with fallback. If a key fails (e.g., quota exceeded),
 * it automatically tries the next key in the pool.
 */

// Load keys from environment variables
const getKeys = () => {
  const keys = [
    process.env.API_KEY_1,
    process.env.API_KEY_2,
    process.env.API_KEY_3,
    process.env.GEMINI_API_KEY, // Fallback to default if provided
  ].filter(Boolean) as string[];

  // If no keys are found, we'll throw an error later when trying to use them
  return keys;
};

let currentKeyIndex = 0;

/**
 * Gets the next available API key from the pool.
 */
const getNextKey = (keys: string[]) => {
  if (keys.length === 0) {
    throw new Error("No API keys configured. Please set API_KEY_1, API_KEY_2, or API_KEY_3.");
  }
  const key = keys[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % keys.length;
  return key;
};

/**
 * Generates content using the Gemini API with automatic key rotation and retries.
 * 
 * @param prompt The user's prompt
 * @param systemInstruction Optional system instruction for the model
 * @returns The generated text response
 */
export const generateWithRotation = async (prompt: string, systemInstruction?: string): Promise<string> => {
  const keys = getKeys();
  let lastError: any = null;

  // Try each key in the pool once
  for (let i = 0; i < Math.max(1, keys.length); i++) {
    try {
      const apiKey = getNextKey(keys);
      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.2, // Keep it low for factual guideline answers
        },
      });

      if (response.text) {
        return response.text;
      } else {
        throw new Error("Empty response from model");
      }
    } catch (error: any) {
      console.error(`Attempt ${i + 1} failed with key index ${(currentKeyIndex - 1 + keys.length) % keys.length}:`, error.message);
      lastError = error;
      // If it's the last attempt, we'll break and throw
    }
  }

  throw new Error(`All API keys failed. Last error: ${lastError?.message || "Unknown error"}`);
};
