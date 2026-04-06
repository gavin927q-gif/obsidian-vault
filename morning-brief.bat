@echo off
cd /d "C:\Users\regio\OneDrive\Documents\Second Brain"
for /f "tokens=*" %%i in ('powershell -Command "Get-Date -Format 'yyyy-MM-dd'"') do set TODAY=%%i
claude -p "Read MEMORY.md and memory/daily/. Summarize: top 3 priorities for today, any overdue items, any client follow-ups needed." > "memory\daily\%TODAY%.md" 2>&1
