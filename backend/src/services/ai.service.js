// import { GoogleGenerativeAI } from "@google/generative-ai";

// const ai = new GoogleGenerativeAI("AIzaSyDtWaKZctVq8PT6L3cdceu_ph55hPYsqUg");

// async function generateResponse(content) {
//   const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
//   config=types.GenerateContentConfig(
//         system_instruction="You are a helpful assistant that helps to simplify legal clauses.",),
//     contents="Hello there"

//   const result = await model.generateContent(content);
//   return result.response.text();
// }

// export default generateResponse;


import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function checkDocument(filePath) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Read document
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const prompt = `
    You are a legal expert.
    Analyze the following legal document and tell:
    1. If it's valid or has issues
    2. Highlight unclear/invalid parts
    3. Give simple explanation

    Document:
    ${fileContent}
    `;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Failed to check document");
  }
}

export default checkDocument;
