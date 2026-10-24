# Project instructions

Follow the shared workspace rules in [workspace AGENTS.md](../../AGENTS.md).

## Graphify

This project has a codebase graph at `graphify-out/graph.json`. Use `graphify query` for codebase questions before searching source files. After code changes, run `graphify update .` to refresh it.

## Archify

Use the installed Archify skill when a diagram is useful for this project. Save each artifact under `.archify/<type>-<slug>-<YYYYMMDD-HHMMSS>/` in this project, keeping its candidate, final HTML, and verification evidence with that artifact. Treat the HTML as a snapshot and regenerate it when the represented project facts change. Do not move or rename delivered files because receipts refer to their paths.
