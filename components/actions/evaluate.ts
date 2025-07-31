import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function evaluateProject(data: any) {
  const prompt = `
You are an evaluator assistant. Rate this project submission for Kayi Digital on a scale from 0 to 100 based on quality, clarity, and feasibility.

Respond ONLY in valid JSON format like:
{
  "score": number,
  "feedback": string,
  "showcalendly": boolean
}

User answers:
${JSON.stringify(data, null, 2)}
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  try {
    const content = completion.choices[0]?.message?.content || "{}";
    return JSON.parse(content);
  } catch {
    return { error: "Invalid AI response" };
  }
}
