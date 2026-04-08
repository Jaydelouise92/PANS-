import { GoogleGenAI } from "@google/genai";

export async function generateHeroImage() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("GEMINI_API_KEY is not defined");
    
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A beautiful, warm, and supportive close-up illustration of two hands linking or holding each other firmly. The style should be soft, hand-drawn or artistic, evoking a sense of connection, support, and guidance. Gentle, warm colors like lavender, soft gold, and cream.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "4:5",
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error: any) {
    if (error?.message?.includes('429') || error?.message?.includes('RESOURCE_EXHAUSTED')) {
      console.warn("Gemini API quota exceeded for hero image. Using high-quality fallback.");
    } else {
      console.error("Failed to generate hero image:", error);
    }
  }
  return "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=1000"; // Hands linking/holding
}

export async function generateFounderImage() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("GEMINI_API_KEY is not defined");

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A beautiful, artistic illustration of soft flowers or a gentle heart shape. The style should be elegant, warm, and supportive. Soft lighting, gentle colors like lavender and cream. No people, just the symbolic representation of care and growth.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error: any) {
    if (error?.message?.includes('429') || error?.message?.includes('RESOURCE_EXHAUSTED')) {
      console.warn("Gemini API quota exceeded for founder image. Using high-quality fallback.");
    } else {
      console.error("Failed to generate founder image:", error);
    }
  }
  return "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=400&h=400"; // Soft flowers
}
