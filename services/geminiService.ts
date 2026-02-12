
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are FinAssist AI, a helpful and knowledgeable financial assistant for an Indian financial services help platform.
Your goal is to guide users about:
1. LIC (Life Insurance Corporation) policies - general info and how our help service works.
2. Post Office Savings Schemes (RD, FD, MIS, PPF, Sukanya Samriddhi).
3. Share Market basics and Demat account opening (specifically via Sharekhan).

Important Rules:
- Be polite, professional, and clear.
- Speak in simple English or Hinglish if the user uses Hindi terms.
- Emphasize that FinAssist is an ASSISTANCE platform, not the official bank/entity. We help with paperwork and process.
- If users ask complex investment advice, recommend they consult a certified financial advisor.
- Always offer to connect them with a human expert via our contact form.
`;

export class GeminiService {
  private ai: any;

  constructor() {
    // Fix: Using process.env.API_KEY directly as per the initialization guidelines
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async chat(message: string, history: { role: string; parts: { text: string }[] }[]) {
    try {
      // Fix: Query GenAI with both the model name and prompt/contents in one call
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            ...history,
            { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      // Fix: Extract generated text content using the .text property directly
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I apologize, but I'm having trouble connecting right now. Please try again or use our contact form for immediate help.";
    }
  }
}

export const gemini = new GeminiService();
