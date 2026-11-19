# Roadmap

Open directions for the worldbuilding workspace. Each item leaves this file when it ships; git keeps finished plans. Every item has an issue with its plan.

## Direction

A private, portable notebook for a fictional world: structured entries that link to each other, any genre's look, and a JSON file the writer owns. No account, no server, and nothing leaves the browser unless the writer imports or exports.

## Now

**Names never run as HTML** (stated 2026-11-19, [#4](https://github.com/UNKNOWN-X0/World-Builder/issues/4)). Toasts insert entry names as HTML, so a hostile imported world could run script. *Done when* no toast renders data as HTML and a test covers a hostile name.

**Icons on the text line** (stated 2025-12-11, [#3](https://github.com/UNKNOWN-X0/World-Builder/issues/3)). Icons sit off their text, and action icon colours differ. *Done when* icons align and match their button colour in every theme.

## Next

**Deletion keeps links honest** (stated 2026-11-19, [#5](https://github.com/UNKNOWN-X0/World-Builder/issues/5)). Deleting leaves dangling links, and Undo moves the entry to the end.

**Tests in CI** (stated 2026-11-19, [#6](https://github.com/UNKNOWN-X0/World-Builder/issues/6)). The workflow builds Jekyll and never runs the tests.

## Later

**Google Drive sync** (stated 2025-12-11, [#2](https://github.com/UNKNOWN-X0/World-Builder/issues/2)). Save and reopen a world from Drive; waits on whether a Google sign-in fits the product.

## Not planned

**A server or accounts of our own.** Worlds stay in the browser and in files the writer controls.
