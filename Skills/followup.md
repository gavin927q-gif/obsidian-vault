# /followup — Follow-Up Radar Command

## Trigger
User types `/followup`

## What It Does (Step by Step)
1. Search Gmail for threads where Gavin sent the last message 48+ hours ago with no reply → "I'm Waiting On"
2. Search Gmail for threads where someone else sent the last message Gavin hasn't replied to → "Waiting On Me"
3. Cross-reference /People/ files to identify contacts and their relationship
4. Flag anything from contacts in /People/ as high priority
5. Treat unknown senders asking about services as leads — surface at top
6. Present two lists, then offer to draft replies

## Files It Reads
- Gmail via MCP (sent + inbox)
- All files in /People/ (cross-reference)
- /Projects/ files (context for ongoing deals)

## Files It Writes
- None automatically — updates /People/ Communication History only after Gavin confirms

## Output Format
```
## 📬 I'm Waiting On
- [Person] — [Subject] — Sent [X] days ago
  → Draft follow-up? (yes/no)

## 📩 Waiting On Me
- [Person] — [Subject] — Received [X] days ago
  → Draft reply? (yes/no)
```

## Rules
- Never send a message without Gavin's explicit approval
- Always ask "Want me to draft a reply?" for each item
- Flag Jesse Hayes, Katie Miller, Katie Smith as high priority
- Treat unknown service inquiries as leads — always surface these first
