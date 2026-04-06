# /today — Daily Briefing Skill

## Trigger
User types `/today`

## What to Do

1. Check today's date
2. Pull Google Calendar events for today via Gmail MCP integration
3. Scan Gmail inbox:
   - Flag unread messages from clients, leads, or known contacts
   - Flag any message about job requests, quotes, or estimates (treat unknown senders asking about services as leads)
   - Note anything needing a reply today
4. Scan all files in `/Tasks/` for:
   - Tasks with `status: open` or `status: in-progress` and `due <= today`
   - Tasks that are overdue
5. Review `/Inbox/` folder for any unprocessed items
6. Check yesterday's Daily Plan (`/Daily Plans/YYYY-MM-DD.md`) for anything marked incomplete

## Output — Write to `/Daily Plans/YYYY-MM-DD.md`

Use this exact structure:

```
# Daily Plan — [Day, Month DD, YYYY]

## ⚡ Big 3 Today
1. [Most important thing]
2. [Second most important]
3. [Third most important]

## 📅 Calendar
- [Time] — [Event]

## 📧 Email Needs Response
- [Sender] — [Subject] — [Why flagged]

## ✅ Tasks Due Today
- [ ] [Task] — [Priority] — [[Person if applicable]]

## ⚡ Quick Wins
- [ ] [Small task that can be knocked out fast]

## ↩️ Carry Forward
- [Items from yesterday's plan not yet done]
```

7. Update `Dashboard.md` header note with today's date
8. Tell Gavin: "Daily plan for [date] is ready → [[Daily Plans/YYYY-MM-DD]]" followed by a 3-sentence summary of what the day looks like
