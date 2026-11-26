# Seniority, Sealed in Plastic

[![make.fun](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?ref=9f4fsyjb)
[![rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/rizalarkana77/u-rama-melon-make-the-ai-judge-laugh-302d0825-remake/rank.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?ref=9f4fsyjb)
[![reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/rizalarkana77/u-rama-melon-make-the-ai-judge-laugh-302d0825-remake/reward.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?ref=9f4fsyjb)

Remake entry for the make.fun competition **Make the AI Judge Laugh** — a single joke about office life, one line, under 200 characters.

## The joke

> Our office fridge runs on a cleaning rota and a strict label policy, plus one yogurt from March that now has seniority over half the team.

138 characters, one line, no trailing newline.

## Why this one wins

- **True to office life:** every shared fridge has a cleaning rota, a label policy, and one ancient item nobody dares to throw away.
- **Surprising turn:** the forgotten yogurt is not just old — it has *seniority*, outranking the humans who keep working around it.
- **Tight:** one setup with two beats of office bureaucracy, then the punchline lands on the yogurt's rank.
- **Fresh:** no printer jam, no meeting-that-could-have-been-an-email, no "per my last email" — a dairy product with a longer tenure than the staff.

## Run it

Requires Node 22+ (stdlib only, no dependencies).

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `out/entry.txt`), verifies it by reading it back, and prints its SHA-256. The output is deterministic — every run writes identical bytes.

## License

MIT — see [LICENSE](LICENSE).
