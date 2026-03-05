# Introduction to Agentic AI — Course Website

Course website for **"Introduction to Agentic AI"**, a graduate-level course at **KAIST Kim Jaechul Graduate School of AI**, taught by **Prof. Sung Ju Hwang**.

🔗 **Live Site**: [Deploy URL TBD]

---

## Course Overview

| | |
|---|---|
| **Instructor** | Prof. Sung Ju Hwang (KAIST Endowed Chair Professor) |
| **Department** | Kim Jaechul Graduate School of AI, KAIST |
| **Schedule** | Every Friday, 9:00 AM – 12:00 PM |
| **Format** | 1.5h Lecture + 1.5h Seminar |
| **Duration** | 16 Weeks (Full Semester) |
| **Semester** | Fall 2025 |

### Topics Covered

1. Introduction to Agentic AI
2. Agentic Architecture Patterns (ReAct, CoT, Reflexion, Tree of Thoughts)
3. Tools & Function Calling (Toolformer, MCP, Gorilla)
4. Memory & RAG (MemGPT, Self-RAG, Agentic RAG)
5. Multi-Agent Systems (AutoGen, MetaGPT, CAMEL)
6. Agentic AI Frameworks (LangGraph, CrewAI, DSPy, OpenHands)
7. Performance Evaluation (AgentBench, GAIA, SWE-bench)
8. Safety & Security (Prompt Injection, AgentDojo, AgentHarm)
9. AgentOps & Infrastructure
10. Code-Generation Agents (SWE-agent, CodeAct, OpenHands)
11. Desktop & Web Agents (WebArena, OSWorld, Mind2Web)
12. Embodied Agents (Voyager, SayCan, PaLM-E, pi_0)
13. Social & Empathetic Agents (Generative Agents, SOTOPIA)

### Grading

| Component | Weight |
|---|---|
| Attendance & Participation | 20% |
| Paper Presentation | 20% |
| Project Proposal (no presentation) | 10% |
| Midterm Report & Presentation | 20% |
| Final Project Report & Presentation | 30% |

---

## Reading List

The website includes a comprehensive **reading list of 106 papers** across all 13 topics, organized into two categories per topic:

- **Seminal Papers** (61 papers) — foundational, must-read papers in each area
- **Recent Papers 2025–2026** (45 papers) — cutting-edge research from the latest conferences and preprints

All paper links have been verified (arXiv, conference proceedings, etc.).

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 6](https://vite.dev/) | Build tool & dev server |
| [Inter](https://fonts.google.com/specimen/Inter) | Typography |
| Vanilla CSS | Styling (single `App.css`) |

### Design Language

The site follows the design language of [deepauto.ai](https://deepauto.ai/):
- **Light theme** with white / `#F8FAFC` alternating section backgrounds
- **Slate color palette**: `#0F172A`, `#1E293B`, `#475569`, `#64748B`, `#94A3B8`
- **Inter font** with tight letter-spacing
- Minimal, flat design with `1px` borders and subtle shadows
- Scroll-triggered fade-in animations via `IntersectionObserver`

---

## Project Structure

```
├── index.html                  # Vite entry point
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── public/                     # Static assets
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Main app (component composition + IntersectionObserver)
    ├── App.css                 # All styles (~200 lines)
    ├── components/
    │   ├── Nav.jsx             # Fixed navigation with mobile toggle
    │   ├── Hero.jsx            # Hero section with badge, title, metrics
    │   ├── Overview.jsx        # 4-card course overview grid
    │   ├── Curriculum.jsx      # 16-week curriculum timeline
    │   ├── ReadingList.jsx     # Accordion reading list (seminal + recent per topic)
    │   ├── Grading.jsx         # Grading breakdown cards + project table
    │   ├── Instructor.jsx      # Instructor bio with links
    │   ├── FAQ.jsx             # 5-item FAQ accordion
    │   ├── Logistics.jsx       # 3x2 logistics grid
    │   └── Footer.jsx          # 4-column footer
    └── data/
        ├── curriculum.js       # 16-week curriculum data
        └── readingList.js      # 106 papers across 13 topics
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`

### Build

```bash
npm run build
```

Output in `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Responsive Design

The site is fully responsive with breakpoints at:
- **Desktop**: `> 1024px` — full layout with 4-column grids
- **Tablet**: `768px – 1024px` — 2-column grids
- **Mobile**: `< 768px` — single column, hamburger nav

---

## Sections

### 1. Navigation
Fixed top nav with glassmorphism backdrop blur. Desktop shows all links; mobile shows hamburger menu.

### 2. Hero
Full-viewport hero with KAIST badge, course title, description, CTA buttons (View Curriculum / Course Logistics), and three metrics (16 Weeks, Fri 9–12, KAIST).

### 3. Course Overview
4-card grid highlighting the four pillars: Agent Architectures, Tools & Memory, Multi-Agent Systems, Real-World Applications.

### 4. Curriculum
16-week timeline with week badges, titles, descriptions, and topic tags. Weeks 8 (Midterm) and 16 (Final) are highlighted.

### 5. Reading List
Accordion UI with 13 topics. Each topic expands to show two sets:
- **Seminal Papers** (dark dot indicator) — foundational papers
- **Recent 2025–2026** (green dot + green left border) — latest research

Total: 106 verified papers with direct links to arXiv/proceedings.

### 6. Grading
4 cards showing weight distribution + detailed project breakdown table.

### 7. Instructor
Prof. Sung Ju Hwang's profile with links to MLAI Lab, Google Scholar, and DeepAuto.ai.

### 8. FAQ
5-item accordion covering prerequisites, lecture structure, projects, paper presentations, and contact info.

### 9. Logistics
3×2 grid with schedule, format, location, department, instructor, and contact details.

### 10. Footer
4-column footer with brand info, course links, resources, and KAIST links.

---

## License

This project is for educational purposes at KAIST.

---

## Instructor

**Sung Ju Hwang** — KAIST Endowed Chair Professor, Kim Jaechul Graduate School of AI

- [MLAI Lab](https://www.mlai-kaist.com/)
- [Google Scholar](https://scholar.google.com/citations?user=CbOsJn0AAAAJ)
- [DeepAuto.ai](https://deepauto.ai/)
