import { GoogleGenAI } from "@google/genai";

export async function generateHeroImage() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A high-quality, soft and calm image of an adult\'s hand gently holding a child\'s hand. The background is a soft, out-of-focus field of lavender and lilac flowers. The lighting is warm and ethereal, with a soft purple and lilac color palette. The mood is supportive, safe, and peaceful. Close up shot.',
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
  return null;
}
