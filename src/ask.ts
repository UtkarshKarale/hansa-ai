import { Command } from "commander";
import keytar from "keytar";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import chalk from "chalk";

const HISTORY_FILE = path.join(process.env.HOME || "", ".aireview_history.json");

interface OpenAIChatCompletion {
  choices?: {
    message?: {
      content?: string;
    };
  }[];
}

export const askCmd = new Command("ask")
  .description("Ask a question to the AI")
  .argument("<prompt...>", "Prompt to send")
  .option("-m, --model <model>", "Model to use", "gpt-4o-mini")
  .action(async (promptParts, opts) => {
    const prompt = promptParts.join(" ");
    const key = await keytar.getPassword("aireview", "default");
    if (!key) {
      console.log(chalk.red("❌ Please login first: aireview login <API_KEY>"));
      process.exit(1);
    }

    console.log(chalk.cyan("🤖 Thinking...\n"));

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: opts.model,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json() as OpenAIChatCompletion;
    const text = data.choices?.[0]?.message?.content || "No response.";
    console.log(chalk.yellowBright("🧠 Response:\n"));
    console.log(text);

    // Save to history
    const entry = { time: new Date().toISOString(), prompt, response: text };
    const history = fs.existsSync(HISTORY_FILE)
      ? JSON.parse(fs.readFileSync(HISTORY_FILE, "utf8"))
      : [];
    history.push(entry);
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
  });



  