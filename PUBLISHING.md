# How to Publish to NPM

This document provides instructions for publishing the `hansa-ai` package to the NPM registry.

## Prerequisites

*   You must be a collaborator on the [NPM package](https://www.npmjs.com/package/hansa-ai).
*   You must have `npm` installed and configured on your machine.

## Publishing Steps

### 1. Log in to NPM

If you are not already logged in, authenticate with NPM:

```bash
npm login
```

Enter your username, password, and one-time password when prompted.

### 2. Ensure Your Branch is Up-to-Date

Before publishing, make sure your local `main` branch is up-to-date with the remote repository:

```bash
git checkout main
git pull origin main
```

### 3. Update the Version

Based on the changes (patch, minor, or major), update the version number using `npm version`:

```bash
# For a patch release (e.g., 1.0.0 -> 1.0.1)
npm version patch

# For a minor release (e.g., 1.0.1 -> 1.1.0)
npm version minor

# For a major release (e.g., 1.1.0 -> 2.0.0)
npm version major
```

This command will update the `package.json` version, create a new commit, and tag it.

### 4. Publish the Package

The `prepublishOnly` script in `package.json` will automatically build the project before publishing.

To publish the new version to NPM, run:

```bash
npm publish
```

### 5. Push the Changes

After publishing, push the new commit and tag to GitHub:

```bash
git push origin main --follow-tags
```

That's it! The new version of `hansa-ai` is now available on NPM.
