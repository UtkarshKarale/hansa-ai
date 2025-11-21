# Contributing to Hansa AI

First off, thank you for considering contributing to Hansa AI! It's people like you that make Hansa AI such a great tool. We welcome contributions from everyone, and we're excited to see what you'll bring to the project.

This document provides a set of guidelines to help you contribute effectively.

## Code of Conduct

This project and everyone participating in it is governed by the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [project-email@example.com](mailto:project-email@example.com).

## How Can I Contribute?

There are many ways to contribute to Hansa AI, from writing code to improving documentation.

*   **Reporting Bugs:** If you find a bug, please [open an issue](https://github.com/UtkarshKarale/hansa-ai/issues/new) and provide as much detail as possible.
*   **Suggesting Enhancements:** If you have an idea for a new feature, feel free to [open an issue](https://github.com/UtkarshKarale/hansa-ai/issues/new) to discuss it.
*   **Writing Code:** If you're ready to write some code, you can get started by looking at issues tagged with `good first issue`.
*   **Improving Documentation:** If you see an opportunity to improve our documentation, please submit a pull request.

## Your First Code Contribution

Ready to contribute? Here’s how to set up your development environment and submit your first pull request.

### 1. Set Up Your Environment

*   **Prerequisites:**
    *   [Node.js](https://nodejs.org/en/) (v18 or higher)
    *   [npm](https://www.npmjs.com/) (comes with Node.js)
    *   [Git](https://git-scm.com/)

*   **Fork and Clone:**
    1.  [Fork the repository](https://github.com/UtkarshKarale/hansa-ai/fork) on GitHub.
    2.  Clone your forked repository to your local machine:
        ```bash
        git clone https://github.com/your-username/hansa-ai.git
        cd hansa-ai
        ```

*   **Install Dependencies:**
    ```bash
    npm install
    ```

*   **Link for Local Testing:**
    To test the `hansa-ai` command locally, use `npm link`:
    ```bash
    npm link
    ```
    This will create a symbolic link, allowing you to run `hansa-ai` from any directory.

### 2. Development Workflow

*   **Create a Branch:**
    Create a new branch for your feature or bug fix. Use a descriptive name.
    ```bash
    git checkout -b feat/add-new-command
    ```

*   **Build the Code:**
    Hansa AI is written in TypeScript. To compile the code, run the build script:
    ```bash
    npm run build
    ```
    You can also run the build in watch mode to automatically recompile on changes:
    ```bash
    npm run build:watch
    ```

*   **Run Tests:**
    Before submitting your changes, make sure all tests pass:
    ```bash
    npm test
    ```

*   **Lint and Format:**
    We use ESLint and Prettier to maintain code quality. To check for issues, run:
    ```bash
    npm run lint
    npm run format
    ```

### 3. Submitting a Pull Request

*   **Commit Your Changes:**
    Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for your commit messages. This helps us automate releases and generate changelogs.
    ```bash
    git commit -m "feat: Add a new command for generating documentation"
    ```

*   **Push to Your Fork:**
    Push your changes to your forked repository.
    ```bash
    git push origin feat/add-new-command
    ```

*   **Open a Pull Request:**
    Go to the [Hansa AI repository](https://github.com/UtkarshKarale/hansa-ai) and open a pull request. Provide a clear description of your changes and reference any related issues.

## How to Get Help

If you get stuck, feel free to reach out to us on our [Discord Community](https://discord.gg/9X5d2r3h).

Thank you for your contribution!
