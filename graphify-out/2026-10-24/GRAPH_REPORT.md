# Graph Report - WorldBuilder (2026-10-24)

## Corpus Check

- Corpus is ~7,023 words - fits in a single context window. You may not need a graph.

## Summary

- 124 nodes · 141 edges · 14 communities (10 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token usage: unavailable (subagent usage metadata was not returned)

## Community Hubs (Navigation)

- Component Editing
- CI Workflow
- Import Export Storage
- Product Overview
- UI Navigation Modals
- Automated Tests
- Interface Features
- Application Modules
- World Data Helpers
- Architecture Data Flow
- Theme and Direction
- Portability and Privacy
- Application Startup
- Schema Definitions

## God Nodes (most connected - your core abstractions)

1. `Ordered JavaScript module loading` - 7 edges
2. `loadFromLink()` - 5 edges
3. `loadFromJSON()` - 5 edges
4. `renderSidebarNav()` - 5 edges
5. `Project file responsibilities` - 5 edges
6. `steps` - 4 edges
7. `createComponentCard()` - 4 edges
8. `renderFieldsView()` - 4 edges
9. `renderLinksPreview()` - 4 edges
10. `saveToLocalStorage()` - 4 edges

## Surprising Connections (you probably didn't know these)

- `World Builder application` --references--> `World Builder application interface` [EXTRACTED]
  README.md → index.html

## Import Cycles

- None detected.

## Communities (14 total, 4 thin omitted)

### Community 0 - "Component Editing"

Cohesion: 0.16
Nodes (9): collapseDetails(), createComponentCard(), expandDetails(), renderFieldsEdit(), renderFieldsView(), renderLinksPreview(), saveEdit(), toggleEditMode() (+1 more)

### Community 1 - "CI Workflow"

Cohesion: 0.14
Nodes (13): runs-on, steps, jobs, build, name, branches, branches, name (+5 more)

### Community 2 - "Import Export Storage"

Cohesion: 0.25
Nodes (9): loadFromJSON(), loadFromLink(), normalizeImportedWorld(), resetData(), saveToLocalStorage(), updateMeta(), updateMetaFields(), validateJSONStructure() (+1 more)

### Community 3 - "Product Overview"

Cohesion: 0.17
Nodes (12): Import via Google Drive or GitHub link, Import and export controls, Import JSON data modal, Import pasted JSON, World Builder application interface, Search, filter, duplicate, edit, and undo, Genre themes and text direction, Links between entries by ID (+4 more)

### Community 4 - "UI Navigation Modals"

Cohesion: 0.24
Nodes (4): renderContent(), renderSidebarNav(), updateBreadcrumb(), updateContentHeader()

### Community 6 - "Interface Features"

Cohesion: 0.25
Nodes (9): Dynamic component editor area, Search entries by name or ID, Main content editor, Project language and text direction, Project title, author, and theme metadata, Project structure navigation, Reset all data control, Settings modal (+1 more)

### Community 7 - "Application Modules"

Cohesion: 0.25
Nodes (8): Application orchestration module, Component templates and forms, World data module, Ordered JavaScript module loading, Data schema module, Import, export, and saving module, Theme logic module, DOM rendering helpers

### Community 9 - "Architecture Data Flow"

Cohesion: 0.33
Nodes (6): Browser persistence and JSON transfer, Data model and component definitions, Entry forms, rendering, and interface behavior, Project file responsibilities, Import and functionality regression tests, Themes and visual styling

### Community 10 - "Theme and Direction"

Cohesion: 0.53
Nodes (4): applyTheme(), renderThemePicker(), themes, updateThemePickerUI()

### Community 11 - "Portability and Privacy"

Cohesion: 0.67
Nodes (4): Browser local storage, Local data privacy and backups, Portable JSON world file, Import from Google Drive or raw GitHub URL

## Knowledge Gaps

- **22 isolated node(s):** `Links between entries by ID`, `Genre themes and text direction`, `Search, filter, duplicate, edit, and undo`, `Import from Google Drive or raw GitHub URL`, `UTF-8 multilingual projects` (+17 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 60 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **What connects `Links between entries by ID`, `Genre themes and text direction`, `Search, filter, duplicate, edit, and undo` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `CI Workflow` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
