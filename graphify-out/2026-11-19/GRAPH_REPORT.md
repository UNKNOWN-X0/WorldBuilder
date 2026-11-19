# Graph Report - World-Builder  (2026-11-19)

## Corpus Check
- 13 files · ~7,901 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 3, .css 1)

## Summary
- 147 nodes · 243 edges · 14 communities (13 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7ec79a6f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Component Editing
- CI Workflow
- Import Export Storage
- Product Overview
- Interface and Import Controls
- functionality.test.cjs
- Theme and Text Direction
- Application Modules
- Roadmap
- Architecture Data Flow
- Main content editor
- Portability and Privacy
- Schema Definitions
- Project instructions

## God Nodes (most connected - your core abstractions)
1. `renderSidebarNav()` - 16 edges
2. `renderContent()` - 14 edges
3. `loadFromJSON()` - 12 edges
4. `loadFromLink()` - 12 edges
5. `saveToLocalStorage()` - 11 edges
6. `init()` - 10 edges
7. `createComponentCard()` - 9 edges
8. `updateBreadcrumb()` - 8 edges
9. `resetData()` - 8 edges
10. `applyTheme()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Reset all data control` --calls--> `resetData()`  [EXTRACTED]
  index.html → storage.js
- `Main content editor` --calls--> `addComponent()`  [EXTRACTED]
  index.html → components.js
- `Import and export controls` --calls--> `showLoadModal()`  [EXTRACTED]
  index.html → ui.js
- `Settings modal` --calls--> `showSettingsModal()`  [EXTRACTED]
  index.html → ui.js
- `Import and export controls` --calls--> `copyJSON()`  [EXTRACTED]
  index.html → storage.js

## Import Cycles
- None detected.

## Communities (14 total, 1 thin omitted)

### Community 0 - "Component Editing"
Cohesion: 0.18
Nodes (23): addComponent(), cancelEdit(), collapseDetails(), countLinksTo(), createComponentCard(), deleteComponent(), duplicateComponent(), expandDetails() (+15 more)

### Community 1 - "CI Workflow"
Cohesion: 0.14
Nodes (13): runs-on, steps, jobs, build, name, branches, branches, name (+5 more)

### Community 2 - "Import Export Storage"
Cohesion: 0.30
Nodes (13): init(), populateThemeSelect(), initializeTemplateData(), loadFromJSON(), loadFromLink(), loadFromLocalStorage(), normalizeImportedWorld(), resetData() (+5 more)

### Community 3 - "Product Overview"
Cohesion: 0.25
Nodes (8): World Builder application interface, Search, filter, duplicate, edit, and undo, Genre themes and text direction, Links between entries by ID, No build step or package installation, Structured world elements, UTF-8 multilingual projects, World Builder application

### Community 4 - "Interface and Import Controls"
Cohesion: 0.16
Nodes (13): Import via Google Drive or GitHub link, Import and export controls, Import JSON data modal, Import pasted JSON, Reset all data control, Settings modal, copyJSON(), downloadJSON() (+5 more)

### Community 5 - "functionality.test.cjs"
Cohesion: 0.10
Nodes (6): assert, fs, { test }, vm, importer(), c

### Community 6 - "Theme and Text Direction"
Cohesion: 0.43
Nodes (6): Project language and text direction, applyTheme(), renderThemePicker(), setTextDirection(), themes, updateThemePickerUI()

### Community 7 - "Application Modules"
Cohesion: 0.25
Nodes (8): Application orchestration module, Component templates and forms, World data module, Ordered JavaScript module loading, Data schema module, Import, export, and saving module, Theme logic module, DOM rendering helpers

### Community 8 - "Roadmap"
Cohesion: 0.33
Nodes (5): Direction, Later, Not planned, Now, Roadmap

### Community 9 - "Architecture Data Flow"
Cohesion: 0.33
Nodes (6): Browser persistence and JSON transfer, Data model and component definitions, Entry forms, rendering, and interface behavior, Project file responsibilities, Import and functionality regression tests, Themes and visual styling

### Community 10 - "Main content editor"
Cohesion: 0.25
Nodes (9): filterComponents(), Dynamic component editor area, Search entries by name or ID, Main content editor, Project title, author, and theme metadata, Project structure navigation, Theme picker, updateMeta() (+1 more)

### Community 11 - "Portability and Privacy"
Cohesion: 0.67
Nodes (4): Browser local storage, Local data privacy and backups, Portable JSON world file, Import from Google Drive or raw GitHub URL

### Community 14 - "Project instructions"
Cohesion: 0.50
Nodes (3): Local workflow, Project data, Project instructions

## Knowledge Gaps
- **20 isolated node(s):** `Import from Google Drive or raw GitHub URL`, `Search, filter, duplicate, edit, and undo`, `Genre themes and text direction`, `Links between entries by ID`, `No build step or package installation` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 57 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Import and export controls` connect `Interface and Import Controls` to `Product Overview`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **What connects `Import from Google Drive or raw GitHub URL`, `Search, filter, duplicate, edit, and undo`, `Genre themes and text direction` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `CI Workflow` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Why does `Import JSON data modal` connect `Interface and Import Controls` to `Import Export Storage`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Should `functionality.test.cjs` be split into smaller, more focused modules?**
  _Cohesion score 0.1038961038961039 - nodes in this community are weakly interconnected._
- **Why does `World Builder application interface` connect `Product Overview` to `Interface and Import Controls`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._