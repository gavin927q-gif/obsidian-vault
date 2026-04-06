# /followup — Follow-Up Radar Skill

## Trigger
User types `/followup`

## What to Do

1. Search Gmail for threads where:
   - **Gavin sent the last message** more than 48 hours ago with no reply → "I'm Waiting On"
   - **Someone else sent the last message** that Gavin hasn't replied to → "Waiting On Me"
   - Pay special attention to: clients, leads, realtors, vendors, anyone in `/People/`

2. Also check `/Tasks/` for tasks with status `open` or `in-progress` that involve another person and have been sitting for 3+ days with no update

3. Present two clean lists:

```
## 📬 I'm Waiting On
- [Person] — [Subject/context] — [Last sent X days ago]

## 📩 Waiting On Me
- [Person] — [Subject/context] — [Received X days ago]
```

4. For each item, ask: "Want me to draft a reply or follow-up message for this one?"

5. If Gavin says yes → draft a message in his voice (friendly, professional, local/personal tone) and ask for approval before sending

## Rules
- Treat unknown Gmail senders asking about services as leads — always surface these
- Never send a message without Gavin's explicit approval
- Flag anything from Jesse Hayes or Lacey Whitehouse as high priority
