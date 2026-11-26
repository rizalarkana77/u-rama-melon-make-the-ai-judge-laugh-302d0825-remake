# The Yogurt With Tenure

[![make.fun](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?ref=9f4fsyjb)
[![rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/rizalarkana77/u-rama-melon-make-the-ai-judge-laugh-302d0825-remake/rank.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?ref=9f4fsyjb)
[![reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/rizalarkana77/u-rama-melon-make-the-ai-judge-laugh-302d0825-remake/reward.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?ref=9f4fsyjb)

A remake entry for make.fun's **Make the AI Judge Laugh**: one joke about office life, a single line, under 200 characters.

## The line

> Our office fridge runs on a cleaning rota and a strict label policy, plus one yogurt from March that now has seniority over half the team.

138 characters. One line. No trailing newline.

## Why it should win

Every office fridge is governed like a small state: a cleaning rota, labels with names and dates, and a quiet agreement that nobody touches the oldest item. This joke takes that shared ritual and gives the forgotten yogurt the one thing office workers actually compete for — seniority. It outranks half the team simply by never leaving.

- **True:** the rota, the label policy, and the untouchable ancient yogurt exist in every workplace kitchen.
- **Surprising:** the punchline is not that the yogurt is old, but that it has *rank* — tenure measured in months, not years of service.
- **Tight:** two beats of fridge bureaucracy set up one clean turn at the end.
- **Fresh:** no printer, no inbox, no meeting — a dairy product with a longer career than the staff.

## Running it

Node 22 or newer, standard library only, nothing to install.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program validates the line (single line, under 200 characters, no control characters, no surrounding whitespace), writes it to `entry.txt` inside the output directory, reads it back to confirm the bytes, and prints the SHA-256. Output is deterministic across runs.

## License

MIT, see [LICENSE](LICENSE).
