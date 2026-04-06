# /review — End of Day Review Skill

## Trigger
User types `/review`

## What to Do

1. Open today's daily plan from `/Daily Plans/YYYY-MM-DD.md`
2. Go through each item in the plan and ask Gavin to confirm:
   - Did you complete this task? (yes / no / partial)
3. Update task statuses in `/Tasks/` based on Gavin's answers:
   - Completed → `status: done`
   - Not done → ask: carry forward / reschedule / cancel
4. For anything incomplete, record the decision (carry forward, new due date, or cancelled)

5. Append an end-of-day summary to today's plan file:

```
---
## 📋 End of Day Summary — [Date]

### ✅ Got Done
- [Item]

### ↩️ Carries Forward
- [Item] → [new due date if set]

### 🗒️ Notes for Tomorrow
- [Anything worth remembering]
```

6. Close out by telling Gavin:
   - What to prioritize first tomorrow morning
   - If there's anything he should prep tonight

## Rules
- Never mark a task done without Gavin confirming it
- Always ask before cancelling a task — don't assume
- Keep the summary brief — 3–5 bullets max per section
