# Movie Miniseries: Pinocchio (1940)

> **Status:** Placeholder-only design skeleton  
> **Aim:** Museum-grade UX/UI first; content later  
> **JS Policy:** Tiny (≤1.5KB progressive enhancement, optional)

A style-first scaffold for a film miniseries + podcast. It defines IA, tokens, components, and strict placeholder rules so the interface can be perfected before prose. **No real content**—every slot is a labeled placeholder.

---

## Repo structure

```
C:.
│   .gitignore
│   LICENSE
│   README.md
│
├───development
│   ├───assets         # Design assets (placeholders only)
│   │       README.md
│   ├───docs           # Design documentation
│   │       README.md
│   ├───prompts        # Master prompt for site generation
│   │       MASTER_PROMPT.md
│   └───site           # Active site workspace (HTML/CSS, placeholders only)
│           characters.html
│           episodes.html
│           extras.html
│           index.html
│           podcast.html
│           site.css
│           themes.html
│           README.md
│
├───prompts            # Sprint notes & project management
│       sprints_complete.md
│       sprints_to_do.md
│
└───root               # Distribution mirror (filled after design locks)
    ├───assets         # Final assets for release
    │       README.md
    ├───docs           # Final documentation
    │       README.md
    └───site           # Final site files for distribution
        README.md
```

**Folder Purpose:**
- `development/` — Active design workspace, all files are placeholders only.
- `root/` — Distribution mirror, filled only after design is locked.
- `prompts/` — Sprint notes, project management, and prompt tracking.
- Top-level files (`.gitignore`, `LICENSE`, `README.md`) — Repo config and documentation.

---

## Principles

- **Placeholders only:** 1–2 lines per text slot; media boxes with `alt="Placeholder: …"`; audio = literal **`[Audio Player Placeholder]`**.  
- **Semantic HTML + single CSS:** one design system (`site.css`, ≤25KB unminified).  
- **Design tokens:** reskin by tokens, never hardcode colors or spacing.  
- **Accessibility:** semantic landmarks, skip link, visible focus, WCAG AA contrast.  
- **Performance:** system fonts, no blocking scripts, tiny optional JS (≤1.5KB).

---

## Design Tokens (names only)

`--ink` `--bg` `--surface` `--accent` `--muted` `--border`  
`--radius` `--shadow` `--space-1..6`  
`--step--1` `--step-0` `--step-1` `--step-2` `--step-3` `--step-4`

---

## Workflow

1. **Edit** `development/prompts/MASTER_PROMPT.md` to (re)generate `development/site/*` under strict placeholder rules.  
2. **Preview** locally by opening `development/site/index.html` in a browser.  
3. **QA** against Acceptance Criteria (below).  
4. **Promote** stable files into `root/site` (distribution mirror) and tag the commit.

---

## Theming

- **Base:** deep indigo + muted gold (accent used sparingly for actions/focus).  
- **Sepia Mode:** warm neutrals for wood/nostalgia.  
- **Celestial Mode:** cool blues for dream/myth.  
- **Rule:** token swap only; maintain AA contrast at all times.

---

## Acceptance Criteria

- **Visual polish:** consistent rhythm, alignment, and spacing; cards/chips/buttons feel cohesive.  
- **Readability:** clear hierarchy across 320–1440px; no cramped blocks; generous line-height.  
- **Responsiveness:** graceful grid collapse; no horizontal scroll; stable hero box ratio.  
- **A11y:** landmarks, working skip link, visible focus rings, AA contrast.  
- **Link integrity:** all nav anchors resolve to valid IDs/routes.  
- **Placeholder discipline:** no real quotes/analysis; every media element labeled as placeholder.  
- **Performance:** single CSS ≤25KB; system fonts; optional JS ≤1.5KB; no blocking scripts.  
- **Theming:** token swap updates look without breaking contrast/spacing.

---

## Local Preview

- Open `development/site/index.html` directly **or** serve statically: `python -m http.server` (optional).

---

## Links

- **Notion:** `[Notion Page Placeholder]`  
- **Issues/Labels:** `ui`, `tokens`, `a11y`, `docs`, `scaffold`

---

## License

`[License Placeholder — to be decided]`
