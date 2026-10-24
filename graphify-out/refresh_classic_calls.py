"""Restore source-verified calls across WorldBuilder's ordered classic scripts."""

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
GRAPH = Path(__file__).with_name("graph.json")
CALLS = [
    ("app_init", "storage_loadfromlocalstorage", "app.js", 8, "loadFromLocalStorage()"),
    ("app_init", "ui_rendersidebarnav", "app.js", 11, "renderSidebarNav()"),
    ("app_init", "ui_rendercontent", "app.js", 12, "renderContent()"),
    ("app_init", "themes_renderthemepicker", "app.js", 13, "renderThemePicker()"),
    ("app_init", "storage_updatemetafields", "app.js", 14, "updateMetaFields()"),
    ("app_init", "ui_updatebreadcrumb", "app.js", 15, "updateBreadcrumb()"),
    ("app_init", "ui_updatesidebartitle", "app.js", 16, "updateSidebarTitle()"),
    ("app_init", "themes_applytheme", "app.js", 20, "applyTheme("),
    ("ui_rendercontent", "components_createcomponentcard", "ui.js", 92, "createComponentCard("),
    ("index_import_modal", "storage_loadfromlink", "index.html", 237, "loadFromLink()"),
    ("index_import_modal", "storage_loadfromjson", "index.html", 254, "loadFromJSON()"),
    ("index_project_language_and_direction", "themes_settextdirection", "index.html", 289, "setTextDirection("),
    ("index_reset_all_data", "storage_resetdata", "index.html", 304, "resetData()"),
    ("components_addcomponent", "ui_rendersidebarnav", "components.js", 16, "renderSidebarNav()"),
    ("components_addcomponent", "ui_rendercontent", "components.js", 17, "renderContent()"),
    ("components_addcomponent", "storage_savetolocalstorage", "components.js", 18, "saveToLocalStorage()"),
    ("components_duplicatecomponent", "ui_rendersidebarnav", "components.js", 27, "renderSidebarNav()"),
    ("components_duplicatecomponent", "ui_rendercontent", "components.js", 28, "renderContent()"),
    ("components_duplicatecomponent", "storage_savetolocalstorage", "components.js", 29, "saveToLocalStorage()"),
    ("components_deletecomponent", "ui_rendersidebarnav", "components.js", 42, "renderSidebarNav()"),
    ("components_deletecomponent", "ui_rendercontent", "components.js", 43, "renderContent()"),
    ("components_deletecomponent", "storage_savetolocalstorage", "components.js", 44, "saveToLocalStorage()"),
    ("components_undodelete", "ui_rendersidebarnav", "components.js", 56, "renderSidebarNav()"),
    ("components_undodelete", "ui_rendercontent", "components.js", 57, "renderContent()"),
    ("components_undodelete", "storage_savetolocalstorage", "components.js", 58, "saveToLocalStorage()"),
    ("components_updatefield", "ui_rendersidebarnav", "components.js", 90, "renderSidebarNav()"),
    ("components_updatefield", "storage_savetolocalstorage", "components.js", 99, "saveToLocalStorage()"),
    ("components_navigatetocomponent", "ui_rendersidebarnav", "components.js", 115, "renderSidebarNav()"),
    ("components_navigatetocomponent", "ui_rendercontent", "components.js", 116, "renderContent()"),
    ("components_navigatetocomponent", "ui_updatebreadcrumb", "components.js", 117, "updateBreadcrumb()"),
    ("components_saveedit", "storage_savetolocalstorage", "components.js", 343, "saveToLocalStorage()"),
    ("components_saveedit", "ui_rendersidebarnav", "components.js", 344, "renderSidebarNav()"),
    ("components_filtercomponents", "ui_rendercontent", "components.js", 423, "renderContent()"),
    ("storage_loadfromlink", "ui_rendersidebarnav", "storage.js", 106, "renderSidebarNav()"),
    ("storage_loadfromlink", "ui_rendercontent", "storage.js", 107, "renderContent()"),
    ("storage_loadfromlink", "ui_updatebreadcrumb", "storage.js", 109, "updateBreadcrumb()"),
    ("storage_loadfromlink", "app_populatethemeselect", "storage.js", 110, "populateThemeSelect()"),
    ("storage_loadfromlink", "themes_applytheme", "storage.js", 111, "applyTheme("),
    ("storage_loadfromjson", "ui_rendersidebarnav", "storage.js", 141, "renderSidebarNav()"),
    ("storage_loadfromjson", "ui_rendercontent", "storage.js", 142, "renderContent()"),
    ("storage_loadfromjson", "ui_updatebreadcrumb", "storage.js", 144, "updateBreadcrumb()"),
    ("storage_loadfromjson", "app_populatethemeselect", "storage.js", 145, "populateThemeSelect()"),
    ("storage_loadfromjson", "themes_applytheme", "storage.js", 146, "applyTheme("),
    ("storage_resetdata", "ui_rendersidebarnav", "storage.js", 34, "renderSidebarNav()"),
    ("storage_resetdata", "ui_rendercontent", "storage.js", 35, "renderContent()"),
    ("storage_resetdata", "ui_updatebreadcrumb", "storage.js", 37, "updateBreadcrumb()"),
    ("storage_resetdata", "app_populatethemeselect", "storage.js", 38, "populateThemeSelect()"),
    ("themes_applytheme", "storage_savetolocalstorage", "themes.js", 264, "saveToLocalStorage()"),
    ("index_project_metadata", "storage_updatemeta", "index.html", 63, "updateMeta("),
    ("index_project_metadata", "themes_applytheme", "index.html", 79, "applyTheme("),
    ("index_import_export_controls", "ui_showloadmodal", "index.html", 85, "showLoadModal()"),
    ("index_import_export_controls", "storage_downloadjson", "index.html", 88, "downloadJSON()"),
    ("index_import_export_controls", "storage_copyjson", "index.html", 141, "copyJSON()"),
    ("index_import_export_controls", "storage_openjsonpreview", "index.html", 160, "openJSONPreview()"),
    ("index_settings_modal", "ui_showsettingsmodal", "index.html", 118, "showSettingsModal()"),
    ("index_settings_modal", "ui_closemodal", "index.html", 271, "closeModal("),
    ("index_import_modal", "ui_closemodal", "index.html", 220, "closeModal("),
    ("index_project_structure_navigation", "ui_togglesidebar", "index.html", 47, "toggleSidebar()"),
    ("index_main_editor", "components_addcomponent", "index.html", 193, "addComponent("),
    ("index_entry_search", "components_filtercomponents", "index.html", 204, "filterComponents()"),
    ("components_createcomponentcard", "components_toggleeditmode", "components.js", 146, "toggleEditMode("),
    ("components_createcomponentcard", "components_duplicatecomponent", "components.js", 149, "duplicateComponent("),
    ("components_createcomponentcard", "components_deletecomponent", "components.js", 150, "deleteComponent("),
    ("components_createcomponentcard", "components_saveedit", "components.js", 159, "saveEdit("),
    ("components_createcomponentcard", "components_canceledit", "components.js", 160, "cancelEdit("),
    ("components_expanddetails", "components_collapsedetails", "components.js", 251, "collapseDetails("),
    ("components_renderfieldsview", "data_escapehtml", "components.js", 201, "escapeHtml("),
    ("components_renderfieldsedit", "data_escapehtml", "components.js", 283, "escapeHtml("),
    ("components_expanddetails", "data_escapehtml", "components.js", 240, "escapeHtml("),
    ("components_renderlinkspreview", "data_resolvelink", "components.js", 400, "resolveLink("),
    ("components_renderlinkspreview", "components_navigatetocomponent", "components.js", 402, "navigateToComponent("),
    ("components_addcomponent", "data_generateid", "components.js", 4, "generateId("),
    ("components_duplicatecomponent", "data_generateid", "components.js", 25, "generateId("),
    ("storage_loadfromlocalstorage", "data_initializetemplatedata", "storage.js", 20, "initializeTemplateData()"),
    ("storage_resetdata", "data_initializetemplatedata", "storage.js", 33, "initializeTemplateData()"),
    ("storage_loadfromlink", "data_escapehtml", "storage.js", 114, "escapeHtml("),
    ("storage_loadfromjson", "data_escapehtml", "storage.js", 149, "escapeHtml("),
    ("storage_updatemetafields", "ui_updatesidebartitle", "storage.js", 260, "updateSidebarTitle()"),
    ("storage_updatemetafields", "ui_updatebreadcrumb", "storage.js", 261, "updateBreadcrumb()"),
    ("ui", "storage_downloadjson", "ui.js", 191, "downloadJSON()"),
]


graph = json.loads(GRAPH.read_text(encoding="utf-8"))
node_ids = {node["id"] for node in graph["nodes"]}
assert graph["multigraph"] is False, "refresh assumes Graphify's non-multigraph output"
assert all(source in node_ids and target in node_ids for source, target, *_ in CALLS)

links = graph["links"]
existing = {frozenset((edge["source"], edge["target"])): edge for edge in links}
added = 0
for source, target, file_name, line_number, symbol in CALLS:
    source_lines = (ROOT / file_name).read_text(encoding="utf-8").splitlines()
    assert symbol in source_lines[line_number - 1], f"{file_name}:{line_number} no longer calls {symbol}"
    pair = frozenset((source, target))
    if pair in existing:
        edge = existing[pair]
        assert edge.get("relation") == "calls", f"call pair collides with {edge.get('relation')}: {source} -> {target}"
        edge.update({
            "context": "verified source call across ordered classic scripts or inline HTML handlers",
            "source_file": file_name,
            "source_location": f"L{line_number}",
        })
        continue
    edge = {
        "source": source,
        "target": target,
        "relation": "calls",
        "_origin": "curated",
        "confidence": "EXTRACTED",
        "confidence_score": 1.0,
        "context": "verified source call across ordered classic scripts or inline HTML handlers",
        "source_file": file_name,
        "source_location": f"L{line_number}",
        "weight": 1.0,
    }
    links.append(edge)
    existing[pair] = edge
    added += 1

GRAPH.write_text(json.dumps(graph, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(f"Verified {len(CALLS)} source call sites; added {added} missing cross-file links.")
