# /project — Project Manager Command

## Trigger
User types `/project [project name]`

## What It Does (Step by Step)

### If Project EXISTS in /Projects/
1. Open the matching project file
2. Scan /Tasks/ for tasks linked to this project (same business or tag)
3. Present full status update:
   - Project status (from front matter)
   - Open tasks sorted by due date and priority
   - Recently completed tasks
   - Last recorded note or communication
   - What's next
4. Always end with: **"What's the next action on this project?"**

### If Project DOES NOT EXIST
1. Ask Gavin to confirm creating a new project
2. Ask: which business? (Web Design / Hillsboro H&P / Personal)
3. Ask: any initial details?
4. Create project file at /Projects/[Business]/[Project-Name].md

## Files It Reads
- /Projects/Web Design/ and /Projects/Hillsboro Home & Property Solutions/
- /Tasks/ (finds linked tasks)
- /People/ (finds linked contacts)

## Files It Writes
- New project file in /Projects/ if creating
- Updates to existing project files

## New Project Front Matter
```yaml
---
type: project
status: open
client:
business_name:
contact_email:
tier:
price:
paid_deposit: false
paid_final: false
due:
domain:
business: [Web Design | Hillsboro Home & Property Solutions]
created: YYYY-MM-DD
last_contact:
lead_status: warm
---
```

## Rules
- Always end every project interaction with the "next action" question
- Link people with [[double brackets]]
- If project name is ambiguous, list close matches and ask Gavin to confirm
- Check both /Projects/ subfolders when searching
