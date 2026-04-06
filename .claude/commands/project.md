The user wants a project status update or to create a new project. The project name is provided after the /project command.

Vault path: C:/Users/regio/OneDrive/Documents/Second Brain

1. Search /Projects/ for a file matching that project name (check both business subfolders: Hillsboro Home & Property Solutions and Web Design)

IF FOUND:
- Open the project file
- Scan /Tasks/ for all tasks linked to this project (same business or matching tags)
- Present: project status, open tasks (sorted by due date and priority), recently completed tasks, last recorded note, what's next
- End with: "What's the next action on this project?"

IF NOT FOUND:
- Ask Gavin to confirm creating a new project
- Ask which business: Hillsboro Home & Property Solutions / Web Design / Personal
- Ask for any initial details
- Create the project file at /Projects/[Business]/[Project Name].md with front matter:

---
type: project
status: open
due:
tags: []
priority: medium
created: YYYY-MM-DD
recurring: false
assigned: Gavin
business: [business]
---

Add ## Overview, ## Tasks, and ## Notes sections.
- End with: "What's the next action on this project?"

Always end every project interaction with the "next action" question.
