The user wants to create a new task. Parse the task description they provided after the /new command.

1. Check if any person is mentioned — search /People/ in the vault (C:/Users/regio/OneDrive/Documents/Second Brain/People/) for a match. If no file exists, ask before creating one.
2. Ask which business this belongs to: Hillsboro Home & Property Solutions / Web Design / Personal
3. Ask for the due date (accept natural language like "Friday", "next week", "no date")
4. Ask for priority: low / medium / high / urgent — default to medium if skipped
5. Create the task file in /Tasks/ named YYYY-MM-DD Task Name.md with this front matter:

---
type: task
status: open
due: YYYY-MM-DD
tags: []
priority: medium
created: YYYY-MM-DD
recurring: false
assigned: Gavin
business: [business]
---

Include the task description in the body. Link any people with [[double brackets]]. Add a blank ## Notes section.

Confirm what was created and show the completed front matter.

Vault path: C:/Users/regio/OneDrive/Documents/Second Brain
