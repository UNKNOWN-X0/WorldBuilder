const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const root =
  process.env.WORLD_ROOT || require("node:path").resolve(__dirname, "..");
function importer(input) {
  let saves = 0;
  const error = { innerHTML: "" };
  const c = {
    data: {
      characters: [{ id: "C1", name: "Existing" }],
      meta: { title: "Original" },
    },
    document: {
      getElementById: (id) =>
        id === "jsonInput" ? { value: JSON.stringify(input) } : error,
    },
    localStorage: {
      setItem() {
        saves++;
      },
    },
    closeModal() {},
    renderSidebarNav() {
      for (const [key, items] of Object.entries(c.data)) {
        if (key !== "meta") items.forEach(() => {});
      }
    },
    renderContent() {},
    updateBreadcrumb() {},
    populateThemeSelect() {},
    applyTheme() {},
    showToast() {},
    escapeHtml: String,
  };
  vm.createContext(c);
  vm.runInContext(fs.readFileSync(root + "/storage.js", "utf8"), c);
  c.updateMetaFields = () => {};
  return { c, error, saves: () => saves };
}
test("malformed collections are rejected without replacing or saving the current world", () => {
  const x = importer({ characters: "bad" });
  x.c.loadFromJSON();
  assert.equal(x.c.data.meta.title, "Original");
  assert.equal(x.saves(), 0);
});
test("partial world imports receive empty collections and default metadata", () => {
  const x = importer({ characters: [{ id: "C2", name: "Imported" }] });
  x.c.loadFromJSON();
  assert.equal(x.error.innerHTML, "");
  assert.equal(x.c.data.meta.title, "My World");
  assert.equal(x.c.data.locations.length, 0);
  assert.equal(x.saves(), 1);
});
