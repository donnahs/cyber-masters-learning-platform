# Cyber Security Engineering Course Materials

Curated for Matt's **Security Engineering** track in the NOVA Cyber Masters Learning Platform.

This is not official UNSW content. It is a legal, practical resource map for learning the same skill areas: secure systems, network security, OS security, cloud security, pentesting, forensics, reverse engineering, incident response and capstone work.

## Priority A — use first

### 1. MIT OpenCourseWare — Computer Systems Security

URL: <https://ocw.mit.edu/courses/6-5660-computer-systems-security-spring-2024>

Use for:

- secure computer systems
- threat models
- OS security
- privilege separation
- capabilities
- crypto network protocols
- trusted hardware
- web/mobile security

Maps to platform modules:

- Principles of Security Engineering
- Network Security
- Linux and Operating System Security

Matt action:

- Read the course description and start with threat models.
- Build a threat model for one of your own apps: RepairFlipForge or HydroTrack.

---

### 2. PortSwigger Web Security Academy

URL: <https://portswigger.net/web-security>

Use for:

- web application security
- legal interactive labs
- SQL injection
- XSS
- CSRF
- auth vulnerabilities
- SSRF
- request smuggling
- JWT
- GraphQL
- API testing

Maps to platform modules:

- Penetration Testing
- Advanced Penetration Testing
- Principles of Security Engineering

Matt action:

- Create a free account.
- Install Burp Suite Community Edition.
- Complete the beginner learning path.
- Save screenshots/notes as portfolio evidence.

Safety rule:

- Only test inside PortSwigger labs or your own apps. Do not test random websites.

---

### 3. OpenSecurityTraining2 — x86-64 Assembly

URL: <https://p.ost2.fyi/courses/course-v1:OpenSecurityTraining2+Arch1001_x86-64_Asm+2021_v1/about>

Use for:

- low-level computing
- x86-64 assembly
- reverse engineering foundation
- exploit-dev foundation
- OS internals foundation

Maps to platform modules:

- Fundamentals of Coding: C and Assembler
- Reverse Engineering
- Advanced Penetration Testing

Matt action:

- Do this slowly, not as a binge.
- Build a notes file called `assembly-cheatsheet.md`.
- Link concepts back to embedded/electronics knowledge.

---

### 4. OpenSecurityTraining catalogue

URL: <https://opensecuritytraining.info/Training.html>

Use for:

- secure coding
- vulnerability assessment
- pcap analysis
- malware dynamic analysis
- reverse engineering
- crypto foundations
- exploitation

Best picks for your course:

- Introduction to Secure Coding
- Introduction to Vulnerability Assessment
- Pcap Analysis & Network Hunting
- Malware Dynamic Analysis
- Understanding Cryptology: Core Concepts
- Introduction to Reverse Engineering Software

Maps to platform modules:

- Network Security
- Reverse Engineering
- Advanced Penetration Testing
- Data Security and Privacy

---

### 5. Palo Alto Networks — Free Cybersecurity Education Courses

URL: <https://www.paloaltonetworks.com/cyberpedia/free-cybersecurity-education-courses>

Use for:

- fundamentals of cybersecurity
- network security
- cloud security
- SOC fundamentals

Maps to platform modules:

- Network Security
- Cloud Security
- Cyber Operations

Matt action:

- Use these as lighter after-work modules.
- Good for broad structure before deeper labs.

---

### 6. NIST CSRC — Incident Response / SP 800-61

URL: <https://csrc.nist.gov/projects/incident-response>

Use for:

- incident response lifecycle
- preparation
- detection
- response
- recovery
- CSF 2.0 mapping
- professional playbooks

Maps to platform modules:

- Incident Response
- Cyber Risk and Resilience
- Cyber Management and Governance

Matt action:

- Build a one-page incident response plan for your own local app stack.
- Add roles, contacts, evidence handling, backup/recovery and lessons learned.

---

### 7. Sleuth Kit Labs — DFIR Training

URL: <https://training.sleuthkitlabs.com>

Use for:

- digital forensics
- incident response
- Autopsy
- Cyber Triage
- case-style investigation practice

Maps to platform modules:

- Digital Forensics
- Incident Response

Matt action:

- Start with the free workshops first.
- Build a forensics case report from a legal sample image or provided lab case.

---

## Priority B — use after foundations

### Autopsy / Sleuth Kit

URL: <https://www.sleuthkit.org/autopsy>

Use for:

- forensic case setup
- evidence ingestion
- hashes
- timelines
- keyword search
- report output

Portfolio output:

- `digital-forensics-case-report.md`

---

### OWASP WebGoat

URL: <https://owasp.org/www-project-webgoat/>

Use for:

- local web app security lab
- safe vulnerable app practice

Safety:

- Run only locally.
- Do not expose vulnerable apps over Tailscale/LAN.

---

### OWASP Top 10

URL: <https://owasp.org/www-project-top-ten/>

Use for:

- web risk vocabulary
- secure app review checklist
- capstone report structure

Portfolio output:

- OWASP Top 10 review of one NOVA app.

---

### TryHackMe Learning Paths

URL: <https://tryhackme.com/paths>

Use for:

- guided beginner labs
- Linux basics
- networking
- SOC basics
- pentesting basics

Best if:

- you want gamified progress after work.

---

### Hack The Box Academy

URL: <https://academy.hackthebox.com/>

Use for:

- deeper pentesting
- Linux privilege escalation
- web security
- hands-on labs

Use after:

- PortSwigger basics
- Linux module

---

## Priority C — career/platform-specific

### Google Cloud Skills Boost — Security labs

URL: <https://www.cloudskillsboost.google/catalog?keywords=security>

Use for:

- cloud IAM
- logging
- cloud security operations

---

### Microsoft Learn — Security Engineer training

URL: <https://learn.microsoft.com/en-us/training/browse/?roles=security-engineer>

Use for:

- Azure security
- Microsoft identity
- SOC tooling
- security analyst jobs

---

### Professor Messer Security+

URL: <https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/>

Use for:

- fast fundamentals refresh
- vocabulary
- broad exam-style review

Not enough by itself for masters-level work.

## Matt's first 4-week material plan

### Week 1 — Threat models and networking

- MIT OCW: threat models intro
- Palo Alto: Fundamentals of Network Security
- Platform lab: Incident Response Home Lab step 1

Output:

- `home-network-threat-model.md`

### Week 2 — Linux and OS security

- MIT OCW: OS security / privilege concepts
- OpenSecurityTraining: intro secure coding or x86 intro
- Platform module: Linux and OS Security

Output:

- `linux-hardening-checklist.md`

### Week 3 — Web app security

- PortSwigger: beginner web security path
- OWASP Top 10 overview
- Optional: WebGoat locally

Output:

- `repairflipforge-web-security-review.md`

### Week 4 — Incident response and forensics

- NIST SP 800-61 incident response material
- Sleuth Kit Labs free DFIR workshop
- Autopsy install/read docs

Output:

- `incident-response-playbook-v1.md`

## Rule for this course

Every resource must produce one of:

- lab notes
- checklist
- report
- diagram
- secure design review
- incident playbook
- portfolio artefact

No passive watching only.
