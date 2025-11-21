# Starter Issues for New Contributors

This file contains a list of "good first issues" that are perfect for new contributors who want to get involved with Hansa AI. These issues are designed to be relatively small and self-contained, making them a great way to get familiar with the codebase.

To get started, pick an issue, and leave a comment to let us know you're working on it.

---

### Issue #1: Improve CLI Help Output

**Description:**
The output of `hansa-ai --help` can be made more descriptive and user-friendly. This involves updating the descriptions for the main command and subcommands to be more informative.

**Tasks:**
1.  Review the current help output by running `hansa-ai --help`.
2.  Update the `.description()` calls in `src/cli.ts` and the command files in `src/commands/` to be more detailed.
3.  Ensure the output is clear, concise, and easy to understand for new users.

**Acceptance Criteria:**
*   The `hansa-ai --help` output is improved.
*   The help output for each subcommand (e.g., `hansa-ai review --help`) is also improved.

---

### Issue #2: Implement a `--verbose` Flag

**Description:**
For debugging purposes, it would be helpful to have a `--verbose` global flag that enables detailed logging.

**Tasks:**
1.  Add a global `--verbose` option to the main command in `src/cli.ts`.
2.  Create a simple logger utility that can be used throughout the application.
3.  The logger should print messages only when the `--verbose` flag is enabled.
4.  Add a few example log messages in one of the commands (e.g., `review`) to demonstrate its usage.

**Acceptance Criteria:**
*   A global `--verbose` flag is available on all commands.
*   When the flag is present, the CLI outputs additional debug information.

---

### Issue #3: Add Unit Tests for the `login` Command

**Description:**
To ensure the `login` command works as expected, we need to add unit tests. This will involve mocking any file system or API interactions.

**Tasks:**
1.  Create a new test file `tests/commands/login.spec.ts`.
2.  Write tests to verify that the `login` command correctly saves the API key.
3.  Mock any external dependencies, such as the `keytar` package, to isolate the command's logic.

**Acceptance Criteria:**
*   The `login` command has a comprehensive suite of unit tests.
*   The tests pass successfully.

---

### Issue #4: Create a Utility Function for API Responses

**Description:**
Create a centralized utility function to handle responses from the Hansa AI API. This function should manage parsing the JSON response, error handling, and extracting the relevant data.

**Tasks:**
1.  Create a new file `src/utils/api.ts`.
2.  Implement a function `handleApiResponse(response)` that takes a `node-fetch` response object.
3.  The function should check for non-200 status codes and throw a standardized error.
4.  If the response is successful, it should parse the JSON and return the data.

**Acceptance Criteria:**
*   A reusable `handleApiResponse` function is available in `src/utils/api.ts`.
*   The function is used in at least one of the commands that make an API call.
