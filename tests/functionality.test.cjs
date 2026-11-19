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

test("toasts show entry names as text and give Undo a real button", () => {
  const src = fs.readFileSync(root + "/ui.js", "utf8");
  const start = src.indexOf("function showToast");
  const end = src.indexOf("\nfunction ", start + 1);
  const made = [];
  const node = (tag) => {
    const n = { tag, children: [], listeners: {}, textContent: "", removed: false,
      append(...xs) { this.children.push(...xs); },
      addEventListener(t, f) { this.listeners[t] = f; },
      remove() { this.removed = true; } };
    Object.defineProperty(n, "innerHTML", { set() { throw new Error("innerHTML used"); } });
    made.push(n);
    return n;
  };
  let undone = 0;
  const c = {
    toastTimeout: null, setTimeout: () => 1, clearTimeout() {},
    document: { querySelectorAll: () => [], createElement: node, body: { appendChild() {} }, addEventListener() {} },
  };
  vm.createContext(c);
  vm.runInContext(src.slice(start, end === -1 ? undefined : end), c);
  const hostile = 'Deleted <img src=x onerror="alert(1)">.';
  c.showToast(hostile, "warning", 5000, { label: "Undo", onClick: () => undone++ });
  const toast = made.find((n) => n.tag === "div");
  assert.ok(toast.children.includes(" " + hostile), "message is appended as a text string");
  assert.ok(!made.some((n) => n.tag === "img"), "no element is created from the message");
  const button = made.find((n) => n.tag === "button");
  assert.equal(button.textContent, "Undo");
  button.listeners.click();
  assert.equal(undone, 1);
  assert.equal(toast.removed, true);
});
