# Research Notes — Cyber Masters Learning Platform

## PDF extraction

The supplied UNSW PDF was image-based. Direct text extraction reported unavailable text for all 36 pages, so I extracted page images with `pdftoppm` and OCR'd them with `tesseract`.

OCR output saved temporarily at:

```text
/tmp/unsw_cyber_pdf/ocr.txt
```

## Key program structure found from PDF OCR

The PDF identifies:

- Master of Cyber Security
- Graduate Diploma in Cyber Security
- Graduate Certificate in Cyber Security
- CRICOS Provider Code 00098G
- Developed with UNSW Canberra / ADFA context
- UNSW Institute for Cyber Security / UNSW Canberra Cyber references

## Course/knowledge areas visible in OCR

Core or repeated areas:

- Data Security and Privacy
- Cybersecurity Ethics
- Principles of Security Engineering
- Cyber Operations
- Cyber Risk and Resilience
- Cyber Management and Governance
- Cyber Threats and Crime
- Cyber and the Law
- Digital Forensics
- Advanced Penetration Testing
- Penetration Testing
- Cloud Security
- Reverse Engineering
- Fundamentals of Coding: C and Assembler
- Operating System Fundamentals for Security
- Capstone Project

## UNSW Handbook web research

Search result for UNSW Handbook Cyber Security showed:

- Program code result: Cyber Security
- 48 Units of Credit
- standalone structure: 24 UOC core + 24 UOC prescribed electives

The online handbook page extraction was minimal because the page is dynamic, so the PDF OCR was the main structure source.

## General masters-level cyber curriculum research

Common masters-level cybersecurity curricula include:

- network security
- applied cryptography / data security
- secure operating systems
- incident response
- penetration testing
- digital forensics
- cloud security
- risk assessment
- governance and policy
- capstone/practicum

## Build decision

The platform was built as a self-study operating system, not as a fake UNSW clone. It maps the UNSW topics into practical modules, labs, quizzes, portfolio outputs and a capstone path.
