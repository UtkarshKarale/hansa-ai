# Hansa AI

[![NPM Version](https://img.shields.io/npm/v/hansa-ai.svg)](https://www.npmjs.com/package/hansa-ai)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Hansa AI is a powerful command-line tool designed to automate and enhance your software development workflow using AI. Get AI-powered code reviews, generate documentation, create test cases, and more, right from your terminal.

## ✨ Features

*   **🤖 AI Code Reviewer:** Get instant feedback on your code for quality, style, and potential bugs.
*   **📄 Document Generator:** Automatically generate documentation for your codebase.
*   **🧪 Test Case Creator:** Create comprehensive test cases for your files in seconds.
*   **🚀 CLI-first:** Built as a fast and easy-to-use NPM tool.
*   **Community Driven:** Open-source and ready for contributors!

## 📦 Installation

Before you begin, make sure you have [Node.js](https://nodejs.org/en/) (v18 or higher) installed.

Install Hansa AI globally using npm:

```bash
npm i -g hansa-ai
```

## ⚙️ Configuration

To use Hansa AI, you need to configure your API key. You can do this by setting the `HANSA_API_KEY` environment variable.

```bash
export HANSA_API_KEY="your_api_key_here"
```

Alternatively, you can run the `login` command to save your key securely:

```bash
hansa-ai login
```

## 🚀 Usage

Hansa AI provides a set of simple commands to integrate into your daily workflow.

### Code Review

Get an AI-powered code review for a specific file:

```bash
hansa-ai review src/cli.ts
```

Review all tracked files in your project:

```bash
hansa-ai review-all
```

### Generate Test Cases

Automatically generate test cases for a file:

```bash
hansa-ai testcases <file>
```

### Generate Documentation

Create documentation for a file:

```bash
hansa-ai docs <file>
```

##  कमांड Reference

| Command      | Description                                       |
|--------------|---------------------------------------------------|
| `login`      | Authenticate and save your API key.               |
| `review`     | Review a specific file.                           |
| `review-all` | Review all tracked files in the project.          |
| `testcases`  | Generate test cases for a file.                   |
| `docs`       | Generate documentation for a file.                |

## 📸 Screenshots

*(Add a GIF or screenshots here to demonstrate Hansa AI in action)*

![Hansa AI Demo](https://raw.githubusercontent.com/UtkarshKarale/hansa-ai/main/assets/hansa-ai.gif)

## 🗺️ Roadmap

We have big plans for Hansa AI! Our goal is to build a comprehensive, community-driven AI toolkit for developers. Here are some of the features we're planning:

*   **API Mode:** Use Hansa AI's features through a REST API.
*   **VSCode Extension:** Integrate Hansa AI directly into your favorite editor.
*   **GitHub Action:** Create an AI code reviewer bot for your repositories.
*   **Multi-language Support:** Add support for Python, Java, and more.
*   **Advanced Caching:** Improve performance with a smart caching system.
*   **Prompt Templates:** Allow users to customize the AI's behavior.

For a more detailed list of tasks, check out our [GitHub Issues](https://github.com/UtkarshKarale/hansa-ai/issues).

## 🙌 How to Contribute

Hansa AI is an open-source project, and we welcome contributions from the community! Whether you're a developer, a designer, or just an enthusiast, there are many ways to get involved.

Please read our [**CONTRIBUTING.md**](CONTRIBUTING.md) file to learn how you can help.

Some ideas for getting started:
*   Look for issues tagged `good first issue`.
*   Improve documentation.
*   Add support for a new programming language.

## 💬 Community & Support

Join our community to ask questions, share ideas, and get help.

*   **Discord:** [Join our Discord Server](https://discord.gg/9X5d2r3h)
*   **GitHub Issues:** [Report bugs or request features](https://github.com/UtkarshKarale/hansa-ai/issues)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
