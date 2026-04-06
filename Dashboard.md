# Gavin's Command Center
*{{date:dddd, MMMM D, YYYY}}*

> Run `/today` each morning to pull calendar, email, and write your daily plan.

---

## 🔴 Urgent & Due Today

```dataview
TABLE due, priority, business
FROM "Tasks"
WHERE (status = "open" OR status = "in-progress")
AND (due = date(today) OR priority = "urgent")
SORT priority DESC
```

---

## 📋 Open Tasks This Week

```dataview
TABLE due, priority, business
FROM "Tasks"
WHERE (status = "open" OR status = "in-progress")
AND due <= date(today) + dur(7 days)
SORT due ASC, priority DESC
```

---

## 🌐 Web Design — Active Projects

```dataview
TABLE client, status, tier, price, due
FROM "Projects/Web Design"
WHERE type = "project"
AND status != "launched"
SORT due ASC
```

---

## 🏡 Property Solutions — Active Jobs

```dataview
TABLE client, job_type, status, payout, due
FROM "Projects/Hillsboro Home & Property Solutions"
WHERE type = "project"
AND status != "complete"
SORT due ASC
```

---

## 🔥 Hot Leads — Web Design

```dataview
TABLE contact, lead_status, last_contact, next_action
FROM "People"
WHERE business = "Web Design"
AND (lead_status = "hot" OR lead_status = "warm")
SORT last_contact DESC
```

---

## 💵 Unpaid Invoices

```dataview
TABLE client, amount, business, due
FROM "Tasks"
WHERE type = "invoice"
AND status = "open"
SORT due ASC
```

---

## 📭 No Due Date — Don't Let These Fall Through

```dataview
TABLE priority, business, status
FROM "Tasks"
WHERE (status = "open" OR status = "in-progress")
AND !due
SORT priority DESC
```

---

## 📥 Inbox / Ideas — Latest Captures

```dataview
LIST
FROM "Inbox" OR "Ideas"
SORT file.mtime DESC
LIMIT 8
```

---

## 📅 Pinned Upcoming
- **Apr 7, 2026** — Send 5 web design pitch emails (Herring, Cindy Cole, ORB, Swift, Jana Nors) — attach PDFs
- **May 14, 2026** — Send WestLand Realty pitch email + PDF before lunch
- **May 19, 2026 @ 11:30 AM** — WestLand Realty Group lunch, West TX office (Katie Miller + Katie Smith) — bring lunch for the team

---

## 👥 People

| Name | Company | Role | Status |
|------|---------|------|--------|
| [[Jesse Hayes]] | Hillsboro Tire & Service | Web Design Client | ✅ Closed |
| [[Katie Miller]] | WestLand Realty Group | Realtor | 🔥 Hot — Lunch May 19 |
| [[Katie Smith]] | WestLand Realty Group | Marketing Manager | 🔥 Hot — Lunch May 19 |
| [[Lacey Whitehouse]] | Julie Siddons Realtors | Realtor | 🌤 Warm |
| [[Ryan - Swift Realty]] | Swift Realty LLC | Investor | 🌤 Warm |
| [[Herring Properties]] | Herring Properties | Real Estate | 🌤 Warm |
| [[Amanda Marbut]] | ORB Investments TX | Commercial RE | 🌤 Warm |
| [[Cindy Cole]] | Independent | Realtor | 🌤 Warm |
| [[Jana Nors]] | Jana Nors Real Estate | Broker/Owner | 🌤 Warm |
