import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "After an hour, we agreed this meeting had no agenda, no decision, and no reason to exist — which took an hour to agree on.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
} catch (error) {
  console.error("failed to write entry.txt:", error);
  process.exit(1);
}
