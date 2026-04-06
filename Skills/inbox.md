# /inbox — Inbox Processing Skill

## Trigger
User types `/inbox`

## What to Do

1. Read all files in `/Inbox/` and today's `/Daily Notes/` entry (read-only — never write to Daily Notes)
2. For each item found, categorize it:
   - **Task** → Create a file in `/Tasks/` with full front matter
   - **Project idea** → Add to `/Ideas/` or create a project file in `/Projects/`
   - **Person-related** → Link to their file in `/People/` (create file if needed, but ASK first)
   - **Business or content idea** → File in `/Ideas/`
   - **Ambiguous** → Ask Gavin what to do before filing

3. When creating task files, use this front matter:
```yaml
---
type: task
status: open
due:
tags: []
priority: medium
created: YYYY-MM-DD
recurring: false
assigned: Gavin
business:
---
```

4. After processing all items, report:
   - "Found X items in Inbox"
   - List each item and what was done with it (created task, filed as idea, etc.)

5. Delete or clear processed Inbox files (move content was captured from)

## Rules
- Never write to `/Daily Notes/`
- Always ask before creating a new person file
- If something could be a task OR a project, ask Gavin which it is
