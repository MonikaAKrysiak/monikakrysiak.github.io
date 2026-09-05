# Session 062 – Knowledge Sharing: Practical Learning Resources

## Goal

Expand the Knowledge Sharing case study with concrete evidence showing how practical educational materials were created for different audiences and security topics.

## Changes

### Practical learning resources

Renamed the existing:

- `Workshop materials`
- `Materiały warsztatowe`

example to:

- `Practical learning resources`
- `Praktyczne materiały edukacyjne`

The content was broadened so that the example covers reusable educational resources rather than only workshop-specific materials.

The updated example describes:

- adapting technical and security topics to people with different levels of experience,
- combining explanations with exercises, checklists and step-by-step guidance,
- creating resources that remain useful after the original session,
- application security and security awareness as example subject areas.

### Evidence

Added two anonymized examples of learning resources:

1. **Step-by-step application security learning material**
   - Path Traversal learning material based on practical PortSwigger Academy labs.
   - Combines vulnerability explanation, hands-on exercises, additional notes and bypass examples.

2. **Security awareness material**
   - Practical guidance for secure remote work.
   - Covers physical surroundings, devices, passwords and protection of project or client data.
   - Company-specific information was removed before the material was added to the portfolio.

The image assets are:

- `knowledge-sharing-path-traversal-learning-material.png`
- `knowledge-sharing-remote-work-security-material.png`

### Evidence data

The new assets were added to the existing centralized Knowledge Sharing evidence data rather than imported separately by each language version.

This keeps shared assets in:

`src/data/case-studies/knowledge-sharing/evidence.ts`

while localized titles, descriptions, alt text and labels remain in:

- `src/data/case-studies/knowledge-sharing/en.ts`
- `src/data/case-studies/knowledge-sharing/pl.ts`

### Responsive evidence layout

Added a dedicated `learning-resource` evidence layout.

On desktop, the two learning resources are displayed as two columns. Each resource keeps its own vertical structure:

`title → description → image`

On mobile, the resources remain stacked vertically.

The layout is scoped specifically to learning resources so that existing evidence layouts remain unchanged, including:

- SQL/JQL course evidence,
- academic teaching evidence,
- community talk evidence.

### Security Knowledge Base connection

Kept the contextual link from Practical Learning Resources to the existing example resources in the Security Knowledge Base case study.

The link uses the appropriate localized route:

- `/en/work/security-knowledge-base#example-resources`
- `/pl/work/security-knowledge-base#example-resources`

This connects related evidence without duplicating the existing Security Knowledge Base content.

## Accessibility

- Evidence images use localized descriptive `alt` text.
- The existing native `<details>` / `<summary>` disclosure remains in use.
- The existing collapse control continues to return focus to the disclosure summary.
- Mobile content order remains logical and readable.
- No additional JavaScript or ARIA was introduced for the new layout.

## Architecture

No ADR was created.

The new `learning-resource` layout is a small, scoped extension of the existing Knowledge Sharing evidence component rather than a new architectural pattern.

Shared evidence assets remain centralized in `evidence.ts`, while language-specific content remains in the localized data files.

## Verification

Verified:

- English version
- Polish version
- desktop layout
- mobile layout
- two-column learning resource layout on desktop
- single-column layout on mobile
- Path Traversal evidence
- remote work security evidence
- existing Security Knowledge Base cross-link
- existing evidence layouts remain isolated from the new `learning-resource` variant

`npm run build` completed successfully.

## Result

The Practical Learning Resources example now provides concrete evidence of two different knowledge-sharing approaches:

- technical, hands-on Application Security education,
- broader security awareness guidance.

The evidence demonstrates both the depth of the technical material and the ability to adapt security knowledge to different audiences and contexts.