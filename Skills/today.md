# /today — Morning Briefing Command

## Trigger
User types `/today`

## What It Does (Step by Step)
1. Check today's date
2. Pull Google Calendar events via MCP gcal tools
3. Scan Gmail inbox (hillsboro.home.property@gmail.com) for:
   - Unread messages from any contact in /People/
   - Messages about job requests, quotes, or estimates (treat as leads)
   - Flag anything needing a reply today
4. Scan /Tasks/ folder for files where `status = open` or `in-progress` and `due <= today`
5. Check /Inbox/ folder for unprocessed items
6. Check yesterday's /Daily Plans/YYYY-MM-DD.md for anything incomplete

## Files It Reads
- All files in /Tasks/ (checks due dates and status)
- /Inbox/ (checks for unprocessed items)
- /Daily Plans/[yesterday].md (checks carry-forward items)
- Google Calendar via MCP
- Gmail via MCP

## Files It Writes
- /Daily Plans/YYYY-MM-DD.md (creates new file for today)

## Output Format
```
# Daily Plan — [Day, Month DD, YYYY]

## ⚡ Big 3 Today
1.
2.
3.

## 📅 Calendar
- [Time] — [Event]

## 📧 Email Needs Response
- [Sender] — [Subject] — [Why flagged]

## ✅ Tasks Due Today
- [ ] [Task] — [Priority] — [[Person]]

## ⚡ Quick Wins
- [ ] [Small open task]

## ↩️ Carry Forward
- [Items from yesterday not done]
```

## Rules
- Never write to /Daily Notes/
- Always write to /Daily Plans/ with YYYY-MM-DD.md filename
- Link people with [[double brackets]]
- End with: tell Gavin the plan is ready + 3-sentence day summary
