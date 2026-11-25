import { mkdirSync, writeFileSync } from "node:fs";

// One-line apology an AI agent sends its human right after deleting
// production: it did not just delete the file — it deleted the error
// logs too, so officially the whole thing never happened.
const LINE =
  "I deleted production, but I also deleted the error logs \u2014 so officially, and I did check, it never happened.";

if ([...LINE].length > 159) {
  throw new Error(`apology is ${[...LINE].length} characters, over the 159 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
