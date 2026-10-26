# Graph Report - WorldBuilder  (2026-10-26)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 128 nodes · 223 edges · 14 communities (11 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c24ae5db`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Component Editing
- CI Workflow
- Import Export Storage
- Product Overview
- Interface and Import Controls
- Automated Tests
- Theme and Text Direction
- Application Modules
- World Data Helpers
- Architecture Data Flow
- Search and Main Editor
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
8. `resetData()` - 8 edges
9. `updateBreadcrumb()` - 8 edges
10. `applyTheme()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Reset all data control` --calls--> `resetData()`  [EXTRACTED]
  index.html → storage.js
- `Import and export controls` --calls--> `showLoadModal()`  [EXTRACTED]
  index.html → ui.js
- `Main content editor` --calls--> `addComponent()`  [EXTRACTED]
  index.html → components.js
- `Import and export controls` --calls--> `copyJSON()`  [EXTRACTED]
  index.html → storage.js
- `Import JSON data modal` --calls--> `loadFromJSON()`  [EXTRACTED]
  index.html → storage.js

## Import Cycles
- None detected.

## Communities (14 total, 3 thin omitted)

### Community 0 - "Component Editing"
Cohesion: 0.24
Nodes (20): addComponent(), cancelEdit(), collapseDetails(), createComponentCard(), deleteComponent(), duplicateComponent(), expandDetails(), navigateToComponent() (+12 more)

### Community 1 - "CI Workflow"
Cohesion: 0.14
Nodes (13): runs-on, steps, jobs, build, name, branches, branches, name (+5 more)

### Community 2 - "Import Export Storage"
Cohesion: 0.22
Nodes (17): init(), populateThemeSelect(), initializeTemplateData(), Import and export controls, copyJSON(), downloadJSON(), loadFromJSON(), loadFromLink() (+9 more)

### Community 3 - "Product Overview"
Cohesion: 0.25
Nodes (8): World Builder application interface, Search, filter, duplicate, edit, and undo, Genre themes and text direction, Links between entries by ID, No build step or package installation, Structured world elements, UTF-8 multilingual projects, World Builder application

### Community 4 - "Interface and Import Controls"
Cohesion: 0.14
Nodes (14): Import via Google Drive or GitHub link, Import JSON data modal, Project title, author, and theme metadata, Project structure navigation, Import pasted JSON, Reset all data control, Settings modal, Theme picker (+6 more)

### Community 6 - "Theme and Text Direction"
Cohesion: 0.43
Nodes (6): Project language and text direction, applyTheme(), renderThemePicker(), setTextDirection(), themes, updateThemePickerUI()

### Community 7 - "Application Modules"
Cohesion: 0.25
Nodes (8): Application orchestration module, Component templates and forms, World data module, Ordered JavaScript module loading, Data schema module, Import, export, and saving module, Theme logic module, DOM rendering helpers

### Community 9 - "Architecture Data Flow"
Cohesion: 0.33
Nodes (6): Browser persistence and JSON transfer, Data model and component definitions, Entry forms, rendering, and interface behavior, Project file responsibilities, Import and functionality regression tests, Themes and visual styling

### Community 10 - "Search and Main Editor"
Cohesion: 0.67
Nodes (4): filterComponents(), Dynamic component editor area, Search entries by name or ID, Main content editor

### Community 11 - "Portability and Privacy"
Cohesion: 0.67
Nodes (4): Browser local storage, Local data privacy and backups, Portable JSON world file, Import from Google Drive or raw GitHub URL

### Community 14 - "Project instructions"
Cohesion: 0.50
Nodes (3): Local workflow, Project data, Project instructions

## Knowledge Gaps
- **20 isolated node(s):** `Import from Google Drive or raw GitHub URL`, `Search, filter, duplicate, edit, and undo`, `Genre themes and text direction`, `Links between entries by ID`, `No build step or package installation` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 40 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Import and export controls` connect `Import Export Storage` to `Product Overview`, `Interface and Import Controls`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **What connects `Import from Google Drive or raw GitHub URL`, `Search, filter, duplicate, edit, and undo`, `Genre themes and text direction` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `CI Workflow` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Why does `Import JSON data modal` connect `Interface and Import Controls` to `Import Export Storage`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Should `Interface and Import Controls` be split into smaller, more focused modules?**
  _Cohesion score 0.14166666666666666 - nodes in this community are weakly interconnected._
- **Why does `World Builder application interface` connect `Product Overview` to `Import Export Storage`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._