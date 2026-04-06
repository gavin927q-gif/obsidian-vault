# /new — Create New Task Skill

## Trigger
User types `/new [task description]`

## What to Do

1. Parse the task description provided by Gavin
2. Check if any person is mentioned — if so, look in `/People/` for a matching file. If no file exists, ask before creating one.
3. Ask (or infer from context):
   - **Which business?** Hillsboro Home & Property Solutions / Web Design / Personal
   - **Due date?** Accept natural language: "Friday", "next week", "end of month", "no date"
   - **Priority?** low / medium / high / urgent — default to `medium` if Gavin says skip
4. Create the task file in `/Tasks/` named `[YYYY-MM-DD] [Task Name].md`

Use this front matter:
```yaml
---
type: task
status: open
due: YYYY-MM-DD
tags: []
priority: medium
created: YYYY-MM-DD
recurring: false
assigned: Gavin
business: [business name]
---
```

5. In the body, include:
   - Task description
   - Any people linked with [[double brackets]]
   - A blank `## Notes` section

6. Confirm: "Task created: [[Tasks/filename]]" and show the completed front matter

## Rules
- Always use [[double brackets]] to link people
- If due date is natural language, convert it to YYYY-MM-DD format
- Never skip asking about business — it matters for the dashboard filters
