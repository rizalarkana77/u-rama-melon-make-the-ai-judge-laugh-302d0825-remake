import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh — remake entry (fresh joke, new repository).
// One line about office life, under 200 characters, written to entry.txt.
// The judge weighs truth to office life, a surprising turn, tightness, freshness.
const joke =
  "Our office fridge runs on a cleaning rota and a strict label policy, plus one yogurt from March that now has seniority over half the team.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, joke, "utf8");

function validateEntry(text: string, expected: string): void {
  if (text !== expected) {
    throw new Error("Read-back verification failed");
  }
  if (text.length === 0) {
    throw new Error("Entry must not be empty");
  }
  if (text !== text.trim()) {
    throw new Error("Entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line with no trailing newline");
  }
  for (const ch of text) {
    const code = ch.codePointAt(0) ?? 0;
    if (code < 0x20 || code === 0x7f) {
      throw new Error(
        `Entry contains forbidden control character U+${code
          .toString(16)
          .toUpperCase()
          .padStart(4, "0")}`,
      );
    }
  }
  const charCount = [...text].length;
  if (charCount >= 200) {
    throw new Error(`Entry must be under 200 characters (got ${charCount})`);
  }
}

const readBack = readFileSync(outPath, "utf8");
validateEntry(readBack, joke);

const sha256 = createHash("sha256").update(readBack, "utf8").digest("hex");
console.log(`Wrote ${outPath} (${[...readBack].length} chars)`);
console.log(`SHA256: ${sha256}`);
console.log(readBack);
