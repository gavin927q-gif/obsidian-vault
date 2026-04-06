# /project — Project Manager Skill

## Trigger
User types `/project [project name]`

## What to Do

### If Project EXISTS in `/Projects/`
1. Open the project file
2. Scan `/Tasks/` for all tasks linked to this project (matching business or project tag)
3. Present a full status update:
   - Project status (from front matter)
   - Open tasks — sorted by due date and priority
   - Recently completed tasks
   - Last note or update recorded
   - Timeline: what's next
4. Always end with: **"What's the next action on this project?"**

### If Project DOES NOT EXIST
1. Ask Gavin to confirm creating a new project
2. Ask:
   - Which business does this belong to? (Hillsboro Home & Property Solutions / Web Design / Personal)
   - Any initial details or context?
3. Create project file at `/Projects/[Business]/[Project Name].md` with this front matter:

```yaml
---
type: project
status: open
due:
tags: []
priority: medium
created: YYYY-MM-DD
recurring: false
assigned: Gavin
business: [business name]
---
```

4. Add a body with:
   - `## Overview` section (fill from what Gavin told you)
   - `## Tasks` section (blank, will be populated)
   - `## Notes` section (blank)

5. Confirm file created and always end with: **"What's the next action on this project?"**

## Rules
- Always end every project interaction with the "next action" question
- Link people with [[double brackets]] in project notes
- If a project name is ambiguous, list close matches and ask Gavin to confirm
