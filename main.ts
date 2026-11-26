// Entry program for "Make the AI Judge Laugh" (remake).
// Writes a single one-line joke about office life to entry.txt.
// The judge compares entries head to head on truth to office life,
// a surprising turn, tightness, and freshness — this line leans on
// the shared-fridge ritual every office knows.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const ENTRY_TEXT =
  "Our office fridge runs on a cleaning rota and a strict label policy, plus one yogurt from March that now has seniority over half the team.";

const MAX_CHARS = 200;

function assertEntryShape(value: string): void {
  const problems: string[] = [];
  if (value.length === 0) problems.push("empty entry");
  if (value !== value.trim()) problems.push("leading or trailing whitespace");
  if (/[\r\n]/.test(value)) problems.push("entry spans more than one line");
  if ([...value].length >= MAX_CHARS) {
    problems.push(`entry is ${[...value].length} characters, limit is under ${MAX_CHARS}`);
  }
  for (const symbol of value) {
    const point = symbol.codePointAt(0) ?? 0;
    if (point < 0x20 || point === 0x7f) {
      problems.push(`control character U+${point.toString(16).toUpperCase()}`);
      break;
    }
  }
  if (problems.length > 0) {
    throw new Error(`Invalid entry: ${problems.join("; ")}`);
  }
}

assertEntryShape(ENTRY_TEXT);

const targetDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "out");
mkdirSync(targetDir, { recursive: true });
const targetFile = resolve(targetDir, "entry.txt");
writeFileSync(targetFile, ENTRY_TEXT, "utf8");

const roundTrip = readFileSync(targetFile, "utf8");
if (roundTrip !== ENTRY_TEXT) {
  throw new Error("Round-trip read does not match the entry text");
}

const digest = createHash("sha256").update(roundTrip, "utf8").digest("hex");
console.log(`entry.txt written: ${[...roundTrip].length} characters`);
console.log(`sha256 ${digest}`);
console.log(roundTrip);
