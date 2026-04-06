# /new — Create New Task Command

## Trigger
User types `/new [task description]`

## What It Does (Step by Step)
1. Parse the task description provided
2. Check if any person is mentioned — search /People/ for a match. Ask before creating new person files.
3. Ask (or infer from context):
   - **Business:** Web Design / Hillsboro Home & Property Solutions / Personal
   - **Due date:** Accept natural language ("Friday", "next week", "no date") — convert to YYYY-MM-DD
   - **Priority:** low / medium / high / urgent — default to medium if skipped
4. Create task file in /Tasks/ named: `YYYY-MM-DD Task Name.md`
5. Confirm creation and show the completed front matter

## Files It Reads
- /People/ (checks for existing person files)

## Files It Writes
- New task file in /Tasks/

## Task File Template
```
---
type: task
status: open
due: YYYY-MM-DD
priority: medium
business: [business]
assigned: Gavin
created: YYYY-MM-DD
---

# [Task Title]

[Task description]

[[Person if applicable]]

## Notes
```

## Rules
- Always use [[double brackets]] to link people
- Convert natural language dates to YYYY-MM-DD
- Never skip asking about business — it matters for dashboard filters
- Confirm creation with: "Task created: [[Tasks/filename]]"
