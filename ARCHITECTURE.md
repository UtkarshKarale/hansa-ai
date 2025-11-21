# CLI Command Architecture

This document outlines the command architecture for the Hansa AI CLI. We use the `commander` package to build our command-line interface.

## Folder Structure

To keep the codebase organized, all commands are located in the `src/commands` directory. Each command should have its own file.

```
/
├── src/
│   ├── commands/
│   │   ├── login.ts
│   │   ├── review.ts
│   │   └── (new commands...)
│   ├── utils/
│   │   └── (helper functions)
│   ├── types/
│   │   └── (type definitions)
│   └── cli.ts      (main entry point)
...
```

## Main CLI Entry Point (`src/cli.ts`)

The `src/cli.ts` file is the main entry point for the CLI. It is responsible for initializing `commander` and loading all the commands from the `src/commands` directory.

Here is how the updated `src/cli.ts` should look after moving the commands:

```typescript
#!/usr/bin/env node
import { Command } from 'commander';
import { loginCmd } from './commands/login.js';
import { reviewCmd, reviewAllCmd } from './commands/review.js';

const program = new Command();

program
  .name('hansa-ai')
  .description('Get a code review from an AI assistant.')
  .version('1.0.0');

// Register all commands
program.addCommand(loginCmd);
program.addCommand(reviewCmd);
program.addCommand(reviewAllCmd);

program.parse();
```

## Creating a New Command

To create a new command, follow this template.

1.  **Create a new file** in `src/commands/`. For example, `src/commands/docs.ts`.
2.  **Define the command** using `commander`.
3.  **Export the command** so it can be imported into `src/cli.ts`.

Here is a template for a new `docs` command:

```typescript
// src/commands/docs.ts
import { Command } from 'commander';

export const docsCmd = new Command('docs')
  .description('Generate documentation for a file.')
  .argument('<file>', 'The file to generate documentation for')
  .action(async (file) => {
    console.log(`Generating documentation for ${file}...`);
    // Add your command logic here
  });
```

After creating the file, you would then import and register it in `src/cli.ts`:

```typescript
// src/cli.ts
// ... other imports
import { docsCmd } from './commands/docs.js';

// ...

program.addCommand(docsCmd);

// ...
```

This architecture makes it easy to add new commands and keeps the codebase clean and maintainable.
