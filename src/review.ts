import { Command } from "commander";
import fetch from "node-fetch";
import fs from "fs";
import chalk from "chalk";
import keytar from "keytar";
import { glob } from "glob";

interface ChatCompletion {
  choices?: {
    message?: {
      content?: string;
    };
  }[];
}

export const reviewCmd = new Command("review")
  .description("Get a code review for a file")
  .argument("<file>", "File to review")
  .action(async (file) => {
    const apiKey = await keytar.getPassword("hansa-ai", "default");
    if (!apiKey) {
      console.log(chalk.red("❌ Please login first: hansa-ai login <API_KEY>"));
      process.exit(1);
    }

    if (!fs.existsSync(file)) {
      console.log(chalk.red(`❌ File not found: ${file}`))
      process.exit(1);
    }

    const fileContent = fs.readFileSync(file, "utf-8");

    const prompt = `Please review the following code:

${fileContent}`;

    console.log(chalk.blue("📝 Prompt:\n"), prompt);
    console.log(chalk.cyan("🤖 Thinking...\n"));

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "anthropic/claude-3-haiku",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json() as ChatCompletion;
    const text = data.choices?.[0]?.message?.content || "No response.";
    console.log(chalk.yellowBright("🧠 Response:\n"));
    console.log(text);
  });

export const reviewAllCmd = new Command("review-all")
  .description("Get a code review for multiple files")
  .option("--include <glob>", "Glob pattern for files to include", "**/*.*")
  .option("--ignore <glob>", "Glob pattern for files to ignore", "node_modules/**,*.lock,*.log")
  .action(async (opts) => {
    const apiKey = await keytar.getPassword("hansa-ai", "default");
    if (!apiKey) {
      console.log(chalk.red("❌ Please login first: hansa-ai login <API_KEY>"));
      process.exit(1);
    }

    const files = await glob(opts.include, { ignore: opts.ignore.split(",") });

    if (files.length === 0) {
      console.log(chalk.yellow("No files found to review."));
      return;
    }

    let prompt = "Please review the following code from my project:\n\n";

    for (const file of files) {
      const fileContent = fs.readFileSync(file, "utf-8");
      prompt += `--- ${file} ---\n${fileContent}\n\n`;
    }

    console.log(chalk.blue("📝 Prompt:\n"), prompt);
    console.log(chalk.cyan("🤖 Thinking...\n"));

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "anthropic/claude-3-haiku",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json() as ChatCompletion;
    const text = data.choices?.[0]?.message?.content || "No response.";
    console.log(chalk.yellowBright("🧠 Response:\n"));
    console.log(text);
  });