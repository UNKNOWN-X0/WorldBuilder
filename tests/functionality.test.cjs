const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const root =
  process.env.WORLD_ROOT || require("node:path").resolve(__dirname, "..");
function world() {
  let saves = 0;
  const c = {
    data: { characters: [{ id: "C1", name: "Tester" }] },
    lastDeletedItem: null,
    lastDeletedType: null,
    generateId: () => "C2",
    renderSidebarNav() {},
    renderContent() {},
    saveToLocalStorage() {
      saves++;
    },
    showToast() {},
    document: { querySelectorAll: () => [] },
  };
  vm.createContext(c);
  vm.runInContext(fs.readFileSync(root + "/components.js", "utf8"), c);
  return { c, saves: () => saves };
}
test("duplicate refreshes navigation and saves an independent copy", () => {
  const x = world();
  x.c.duplicateComponent("characters", 0);
  assert.equal(x.c.data.characters.length, 2);
  assert.equal(x.c.data.characters[1].id, "C2");
  assert.notEqual(x.c.data.characters[0], x.c.data.characters[1]);
  assert.equal(x.saves(), 1);
});
test("delete and undo both persist their changes", () => {
  const x = world();
  x.c.deleteComponent("characters", 0);
  assert.equal(x.c.data.characters.length, 0);
  assert.equal(x.saves(), 1);
  x.c.undoDelete();
  assert.equal(x.c.data.characters.length, 1);
  assert.equal(x.saves(), 2);
  x.c.undoDelete();
  assert.equal(x.c.data.characters.length, 1);
});
