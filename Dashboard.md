# 🧭 Gavin's Dashboard
*Run `/today` each morning to refresh your plan and pull calendar + email.*

---

## 📅 Today's Schedule
> Run `/today` to populate your daily plan → [[Daily Plans/]]

---

## 🚨 Needs My Attention — Overdue & Due Today

```dataview
TABLE due, priority, business, status
FROM "Tasks"
WHERE status != "done" AND status != "cancelled"
AND due <= date(today)
SORT priority DESC, due ASC
```

---

## 📆 This Week

```dataview
TABLE due, priority, business
FROM "Tasks"
WHERE status != "done" AND status != "cancelled"
AND due > date(today) AND due <= date(today) + dur(7 days)
SORT due ASC, priority DESC
```

---

## 📭 No Due Date — Don't Let These Fall Through

```dataview
TABLE priority, business, status
FROM "Tasks"
WHERE status != "done" AND status != "cancelled"
AND !due
SORT priority DESC
```

---

## 📥 Inbox / Ideas — Latest Captures

```dataview
LIST
FROM "Inbox" OR "Ideas"
SORT file.mtime DESC
LIMIT 10
```

---

## 👥 People

- [[Jesse Hayes]] — Hillsboro Tire & Service (Web Design Client)
- [[Lacey Whitehouse]] — Julie Siddons Realtors (Realtor Lead)
