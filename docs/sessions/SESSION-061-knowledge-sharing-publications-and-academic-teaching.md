# Session 061 – Knowledge Sharing: Publications and Academic Teaching

## Goal

Extend the **Teaching & Knowledge Sharing** case study with concrete evidence for:

- technical and academic publications,
- academic teaching,
- a guest lecture on application security and OWASP.

The implementation should keep the existing evidence architecture, remain accessible and responsive, and avoid unnecessary complexity.

---

## What changed

### Publications

Expanded the **Technical articles** example with selected publications from a broader academic and professional publication record.

Added evidence for:

- *Zastosowanie ontologii w budowie semantycznego Internetu oraz modelowaniu wiedzy o organizacji*,
- *Wpływ zastosowań nowoczesnych technologii na atrakcyjność i popularność muzeów w Polsce*,
- *Metodyki zarządzania projektami IT i ich ryzykiem: przegląd i wykorzystanie*,
- *The Cyber Threats Analysis for Web Applications Security in Industry 4.0*,
- *Security threats spotted by QA Engineers. Cybersecurity testing based on TSH projects*,
- *OWASP Top 10 Privacy Risks – use these best practices to protect your clients*.

Added links to the relevant external publication sources.

Added a publications overview image as visual context for the evidence section.

---

### Academic teaching

Expanded the **Academic teaching** example with evidence from two different teaching activities.

#### Project Management classes

Documented doctoral teaching practice involving semester-long student projects.

The example demonstrates how students applied project management concepts in practice, including:

- defining project goals,
- creating a Work Breakdown Structure,
- planning schedules,
- analysing project risks.

Added a combined teaching-material image showing project goals and WBS content.

Added a link to the University of Economics in Katowice profile.

#### Guest lecture: Application security and OWASP

Added evidence documenting the guest lecture:

> Alfabet bezpiecznej aplikacji i krytyczne zagrożenia cyfrowe – praktyczne zastosowania OWASP

The lecture was delivered as part of the Security Engineering course and used examples from QA and software projects to discuss application security risks and practical uses of OWASP.

Added a combined image containing:

- the university lecture announcement,
- the official thank-you after the lecture.

Added a link to the LinkedIn recap.

---

## Evidence architecture

Extended the Knowledge Sharing evidence model with optional properties needed by the new content.

This included support for:

- an academic evidence layout,
- links displayed directly after an evidence description,
- contextual collapse labels for individual practical examples.

The existing evidence component remains shared between publications, academic teaching and community talks.

---

## Evidence layout

Added an `academic` layout variant for evidence items.

On larger screens it allows academic evidence to use:

- a full-width evidence title,
- visual evidence on the left,
- description and related links on the right.

The existing default layout was preserved so the **Community talks** evidence remains unchanged.

On smaller screens the content continues to use the existing single-column responsive layout.

---

## Long evidence sections

The expanded evidence sections became long enough that collapsing them required scrolling back to the original `<summary>`.

To improve this interaction, a secondary collapse control was added at the bottom of an expanded evidence section.

The implementation preserves native `<details>` / `<summary>` semantics:

- the original `<summary>` remains the control used to expand the section,
- the bottom control is a native `<button>`,
- activating it closes the nearest `<details>`,
- focus returns to the original `<summary>` after the section is collapsed.

The visual arrow in the button is decorative and hidden from assistive technologies.

Context-specific labels were added so the action describes the content being hidden, for example:

- `Hide selected publications`,
- `Hide teaching evidence`,
- `Ukryj wybrane publikacje`,
- `Ukryj materiały dydaktyczne`.

---

## Typography

Evidence titles and descriptions continue to use the existing typography formatter.

This preserves the existing handling of short Polish words and prevents typographic orphans without introducing evidence-specific formatting logic.

---

## Assets added

```text
src/assets/case-studies/knowledge-sharing-publications-overview.jpg
src/assets/case-studies/knowledge-sharing-academic-project-goals.png
src/assets/case-studies/knowledge-sharing-academic-owasp-lecture.png