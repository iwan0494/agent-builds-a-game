// main.ts — copies POST.json from the repository root to the output directory.
// Node 22, standard library only. No network, no clock, no files outside the repo.
// The grader runs it twice; both runs write the same bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
