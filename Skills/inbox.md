# /inbox — Inbox Processing Command

## Trigger
User types `/inbox`

## What It Does (Step by Step)
1. Read all files in /Inbox/ folder
2. Read today's /Daily Notes/ entry if it exists (READ ONLY — never write here)
3. For each item, categorize:
   - **Task** → Create task file in /Tasks/ with YAML front matter
   - **Project idea** → Add to /Ideas/ or create project file in /Projects/
   - **Person-related** → Link to their file in /People/ (ask before creating new person files)
   - **Business/content idea** → File in /Ideas/
   - **Ambiguous** → Ask Gavin before filing
4. Report what was found and what was done with each item
5. Clear (delete content from) fully processed Inbox files

## Files It Reads
- All files in /Inbox/
- /Daily Notes/[today].md (read only)

## Files It Writes
- New task files in /Tasks/
- New or updated files in /Ideas/
- New or updated files in /Projects/
- Updates to /People/ files (append only)
- Clears content from processed /Inbox/ files

## Task Front Matter Template
```yaml
---
type: task
status: open
due: YYYY-MM-DD
priority: medium
business: [Web Design | Hillsboro Home & Property Solutions | Personal]
assigned: Gavin
created: YYYY-MM-DD
---
```

## Rules
- Never write to /Daily Notes/
- Always ask before creating a new person file
- If something could be a task OR a project — ask
- Link people with [[double brackets]]

## Example Output
"Found 3 items in Inbox:
- 'Call Herring Properties' → Created task in /Tasks/ due 2026-04-12
- 'Idea: Add SEO retainer to pitches' → Added to /Ideas/Hillsboro-Web-Design-Growth.md
- 'Note about Lacey' → Appended to /People/Lacey Whitehouse.md"
