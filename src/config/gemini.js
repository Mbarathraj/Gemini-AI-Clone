
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyAvdIleud2NjKlMs4D31Pkwsz077UJqurQ";
// Access your API key (see "Set up your API key" above)

const genAI = new GoogleGenerativeAI(apiKey);

async function run(prompt) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
}
export default run;

