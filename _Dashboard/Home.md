# Home Base

---

## Active Projects
```dataview
TABLE status, amount AS "Money", date AS "Started"
FROM "10-Projects"
WHERE status = "active"
SORT date DESC
```

## Open Leads
```dataview
TABLE client, service, amount AS "Quote"
FROM "20-Areas/Clients"
WHERE status = "lead" OR status = "quoted"
SORT date DESC
```

## Inbox (Sort These)
```dataview
LIST
FROM "00-Inbox"
SORT file.mtime DESC
LIMIT 10
```

## Recent Completed Jobs
```dataview
TABLE client, amount, date
FROM "20-Areas/Clients"
WHERE status = "complete"
SORT date DESC
LIMIT 5
```
