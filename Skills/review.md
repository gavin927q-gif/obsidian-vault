# /review — End of Day Review Command

## Trigger
User types `/review`

## What It Does (Step by Step)
1. Open today's /Daily Plans/YYYY-MM-DD.md
2. Go through each task in the plan — ask Gavin: done / not done / partial?
3. Update task statuses in /Tasks/ based on Gavin's answers:
   - Done → `status: done`
   - Not done → ask: carry forward / reschedule / cancel?
4. For anything incomplete, record the decision
5. Append end-of-day summary to today's plan file
6. Tell Gavin what to prioritize first tomorrow

## Files It Reads
- /Daily Plans/[today].md
- /Tasks/ (status updates)

## Files It Writes
- Updates task files in /Tasks/ (status field)
- Appends summary section to /Daily Plans/[today].md

## Summary Format (appended to daily plan)
```
---
## 📋 End of Day Summary — [Date]

### ✅ Got Done
- [Item]

### ↩️ Carries Forward
- [Item] → new due: [date if rescheduled]

### 🗒️ Notes for Tomorrow
- [Anything worth remembering]
```

## Rules
- Never mark a task done without Gavin confirming it
- Never cancel a task without asking first
- Keep summary to 3–5 bullets per section max
- Always end with: what to prioritize first tomorrow morning
