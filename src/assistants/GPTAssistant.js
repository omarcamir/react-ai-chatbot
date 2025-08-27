import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_GPT_API_KEY, // make sure this is in your .env
  dangerouslyAllowBrowser: true, // ⚠️ frontend only, not secure (use backend in production)
});

export async function sendToGPT(prompt, modelName = "gpt-4o-mini") {
  try {
    const response = await client.chat.completions.create({
      model: modelName,
      messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Unable to fetch response from OpenAI");
  }
}
