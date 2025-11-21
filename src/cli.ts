#!/usr/bin/env node
import { Command } from "commander";
import { reviewCmd, reviewAllCmd } from "./review.js";
import { loginCmd } from "./login.js";

const program = new Command();
program
  .name("hansa-ai")
  .description("Get a code review from an AI assistant.")
  .version("0.1.0");

program.addCommand(reviewCmd);
program.addCommand(reviewAllCmd);
program.addCommand(loginCmd);

program.parse();
