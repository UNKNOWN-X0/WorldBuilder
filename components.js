// Component CRUD operations

function addComponent(type) {
    const newId = generateId(type);
    const newItem = { id: newId };
    
    // Initialize all fields with empty values
    const schema = schemas[type];
    for (const fieldKey of Object.keys(schema.fields)) {
        if (fieldKey !== "id") {
            newItem[fieldKey] = "";
        }
    }
    
    data[type].push(newItem);
    renderTabs();
    renderContent();
    saveToLocalStorage();
    showToast(`Added new ${schemas[type].label.slice(0, -1)}`, "success");
}

function duplicateComponent(type, index) {
    const original = data[type][index];
    const duplicate = JSON.parse(JSON.stringify(original));
    duplicate.id = generateId(type);
    data[type].push(duplicate);
    renderTabs();
    renderContent();
    saveToLocalStorage();
    showToast(`Duplicated ${original.name || original.topic || original.id}`, "success");
}

function deleteComponent(type, index) {
    const item = data[type][index];
    lastDeletedItem = JSON.parse(JSON.stringify(item));
    lastDeletedType = type;
    
    data[type].splice(index, 1);
    renderTabs();
    renderContent();
    saveToLocalStorage();
    
    showToast(`Deleted ${item.name || item.topic || item.id}. <button onclick="undoDelete()" style="margin-left: 10px; padding: 5px 10px; background: var(--accent); border: none; border-radius: 4px; cursor: pointer; color: white;">Undo</button>`, "warning", 5000);
}

function undoDelete() {
    if (lastDeletedItem && lastDeletedType) {
        data[lastDeletedType].push(lastDeletedItem);
        renderTabs();
        renderContent();
        saveToLocalStorage();
        showToast("Restore successful", "success");
        lastDeletedItem = null;
        lastDeletedType = null;
        
        // Close any existing toasts
        const toasts = document.querySelectorAll(".toast");
        toasts.forEach(t => t.remove());
    }
}

function updateField(type, index, field, value) {
    data[type][index][field] = value;
    
    // Update links preview if it's a link field
    const schema = schemas[type];
    if (schema.fields[field] && (schema.fields[field].type === "links" || schema.fields[field].type === "link")) {
        const fieldId = `field-${type}-${index}-${field}`;
        const inputEl = document.getElementById(fieldId);
        if (inputEl && inputEl.nextElementSibling) {
            inputEl.nextElementSibling.innerHTML = renderLinksPreview(value, schema.fields[field].targets);
        }
    }
    
    // Update tab counts and card title
    renderTabs();
    const card = document.querySelector(`#card-${type}-${data[type][index].id}`);
    if (card) {
        const displayName = data[type][index].name || data[type][index].topic || data[type][index].id;
        card.querySelector(".component-title").innerHTML = `${schemas[type].icon} ${displayName} <span style="color: var(--text-dim); font-size: 14px;">(${data[type][index].id})</span>`;
    }
    
    saveToLocalStorage();
}

function toggleCollapse(type, index) {
    const body = document.getElementById(`body-${type}-${index}`);
    if (body) {
        body.classList.toggle("collapsed");
    }
}

function navigateToComponent(id) {
    // Find which type contains this ID
    for (const [type, items] of Object.entries(data)) {
        if (type === "meta") continue;
        const found = items.find(item => item.id === id);
        if (found) {
            currentTab = type;
            renderTabs();
            renderContent();
            setTimeout(() => {
                const card = document.getElementById(`card-${type}-${id}`);
                if (card) {
                    card.scrollIntoView({ behavior: "smooth", block: "center" });
                    card.classList.add("highlight");
                    setTimeout(() => card.classList.remove("highlight"), 2000);
                }
            }, 100);
            return;
        }
    }
    showToast(`Component with ID "${id}" not found`, "warning");
}

function createComponentCard(type, item, index) {
    const card = document.createElement("div");
    card.className = "component-card";
    card.id = `card-${type}-${item.id}`;
    
    const schema = schemas[type];
    const displayName = item.name || item.topic || item.id;
    
    card.innerHTML = `
        <div class="component-header" onclick="toggleCollapse('${type}', ${index})">
            <div class="component-title">${schema.icon} ${displayName} <span style="color: var(--text-dim); font-size: 14px;">(${item.id})</span></div>
            <div class="component-controls" onclick="event.stopPropagation()">
                <button class="secondary" onclick="duplicateComponent('${type}', ${index})">📋 Duplicate</button>
                <button class="danger" onclick="deleteComponent('${type}', ${index})">🗑️ Delete</button>
            </div>
        </div>
        <div class="component-body" id="body-${type}-${index}">
            ${renderFields(type, item, index)}
        </div>
    `;
    
    return card;
}

function renderFields(type, item, index) {
    const schema = schemas[type];
    let html = "";
    
    for (const [fieldKey, fieldDef] of Object.entries(schema.fields)) {
        const value = item[fieldKey] || "";
        const fieldId = `field-${type}-${index}-${fieldKey}`;
        
        html += `<div class="input-group">`;
        html += `<label>${fieldDef.label}${fieldDef.required ? ' *' : ''}</label>`;
        
        if (fieldDef.type === "textarea") {
            html += `<textarea id="${fieldId}" oninput="updateField('${type}', ${index}, '${fieldKey}', this.value)">${escapeHtml(value)}</textarea>`;
        } else if (fieldDef.type === "links" || fieldDef.type === "link") {
            html += `<input type="text" id="${fieldId}" value="${escapeHtml(value)}" oninput="updateField('${type}', ${index}, '${fieldKey}', this.value)" placeholder="Comma-separated IDs">`;
            html += `<div style="margin-top: 8px;">${renderLinksPreview(value, fieldDef.targets)}</div>`;
        } else {
            html += `<input type="text" id="${fieldId}" value="${escapeHtml(value)}" oninput="updateField('${type}', ${index}, '${fieldKey}', this.value)">`;
        }
        
        html += `</div>`;
    }
    
    return html;
}

function renderLinksPreview(value, targets) {
    if (!value) return "";
    const ids = value.split(",").map(id => id.trim()).filter(id => id);
    return ids.map(id => {
        const resolved = resolveLink(id, targets);
        const name = resolved ? (resolved.name || resolved.topic || id) : id;
        return `<span class="link-tag" onclick="navigateToComponent('${escapeHtml(id)}')" title="Click to navigate">${escapeHtml(name)} (${escapeHtml(id)})</span>`;
    }).join(" ");
}

function filterComponents() {
    renderContent();
}
