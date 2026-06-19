# NOVA Cyber Masters Learning Platform

A practical self-study platform for learning Master of Cyber Security topics, mapped from the UNSW Master of Cyber Security guide Matt supplied plus common postgraduate cyber curriculum patterns.

## Important note

This is **not official UNSW courseware**. It is a private learning platform to prepare for, mirror, or self-study equivalent skills.

## Source research used

- User-supplied UNSW Master of Cyber Security PDF: `doc_818816e4b88e_UNSW-Master-of-Cyber-Security_260603_142111.pdf`
- OCR extracted 36 pages locally with `pdftoppm` + `tesseract` because PDF text was image-based.
- UNSW Handbook result identified Cyber Security program references with 48 UOC structure.
- General masters-level cyber curriculum scan: network security, incident response, penetration testing, forensics, cloud, cryptography/data security, governance, risk, law, ethics and capstone.

## Run

```bash
python3 -m http.server 8920 --bind 0.0.0.0
```

Open:

```text
http://127.0.0.1:8920/
```

## Test

```bash
node --check app.logic.js
node --check app.ui.js
node test.js
```

## Built features

- UNSW-inspired cyber masters module map
- Security Engineering track
- Security Management & Leadership track
- 24-week configurable study planner
- progress tracker using browser localStorage
- weighted level score: Recruit / Apprentice / Operator
- module cards with lessons, labs and portfolio projects
- quick labs:
  - Incident Response Home Lab
  - Web Pentest Lab
  - Forensics Lab
- quiz trainer
- daily recommendation engine
- export progress JSON
- mobile dark UI

## Best use

Use it as your cyber study operating system. Do one module at a time, finish labs, and turn each output into a portfolio artefact.
