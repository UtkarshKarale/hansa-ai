import { Command } from "commander";
import keytar from "keytar";
import chalk from "chalk";

export const loginCmd = new Command("login")
  .description("Store your OpenRouter API key securely")
  .argument("<key>", "Your OpenRouter API key")
  .action(async (key) => {
    await keytar.setPassword("hansa-ai", "default", key);
    console.log(chalk.green("✅ API key saved successfully!"));
  });
