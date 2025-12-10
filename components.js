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
    renderSidebarNav();
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
    
    // Update sidebar nav, card title
    renderSidebarNav();
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
    for (const [type, items] of Object.entries(data)) {
        if (type === "meta") continue;
        const found = items.find(item => item.id === id);
        if (found) {
            currentTab = type;
            renderSidebarNav();
            renderContent();
            updateBreadcrumb();
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
    
    const isEditing = card.dataset?.editing === "true";
    
    card.innerHTML = `
        <div class="component-header">
            <div class="component-title">${schema.icon} ${displayName} <span style="color: var(--text-dim); font-size: 14px; font-weight: 400;">(${item.id})</span></div>
            <div class="component-controls">
                <button class="btn-edit" onclick="toggleEditMode('${type}', ${index}, event)" data-editing="false">
                    ✏️ Edit
                </button>
                <button class="secondary" onclick="duplicateComponent('${type}', ${index})">📋 Duplicate</button>
                <button class="danger" onclick="deleteComponent('${type}', ${index})">🗑️ Delete</button>
            </div>
        </div>
        <div class="component-body view-mode" id="body-${type}-${index}">
            ${renderFieldsView(type, item, index)}
        </div>
        <div class="component-body edit-mode" id="body-edit-${type}-${index}" style="display: none;">
            ${renderFieldsEdit(type, item, index)}
            <div class="edit-actions">
                <button class="btn primary" onclick="saveEdit('${type}', ${index})">💾 Save Changes</button>
                <button class="btn secondary" onclick="cancelEdit('${type}', ${index})">✖️ Cancel</button>
            </div>
        </div>
    `;
    
    return card;
}

function renderFieldsView(type, item, index) {
    const schema = schemas[type];
    
    // Define key fields to show for each type
    const keyFields = {
        characters: ['name', 'role', 'power_level', 'age'],
        minorEvents: ['name', 'category', 'timeline'],
        majorEvents: ['name', 'arc', 'timeline'],
        globalEvents: ['name', 'type', 'year_or_era'],
        locations: ['name', 'type'],
        factions: ['name', 'type', 'faction_level'],
        items: ['name', 'type', 'item_level'],
        lore: ['topic', 'type'],
        worldRules: ['name', 'description']
    };
    
    const fieldsToShow = keyFields[type] || ['name'];
    
    let html = '<div class="field-grid-summary">';
    
    for (const fieldKey of fieldsToShow) {
        const fieldDef = schema.fields[fieldKey];
        const value = item[fieldKey] || "";
        
        if (fieldDef && value) {
            html += `<div class="field-display-summary">`;
            html += `<div class="field-label-summary">${fieldDef.label}</div>`;
            
            if (fieldDef.type === "links" || fieldDef.type === "link") {
                html += `<div class="field-value-summary">${renderLinksPreview(value, fieldDef.targets)}</div>`;
            } else {
                const truncatedValue = value.length > 100 ? value.substring(0, 100) + '...' : value;
                html += `<div class="field-value-summary">${escapeHtml(truncatedValue)}</div>`;
            }
            
            html += `</div>`;
        }
    }
    
    // Add expand button to see all fields
    html += `<div class="expand-details">
        <button class="btn-expand" onclick="expandDetails('${type}', ${index}, event)">
            📋 View All Details
        </button>
    </div>`;
    
    html += '</div>';
    return html;
}

function expandDetails(type, index, event) {
    event.stopPropagation();
    
    const viewMode = document.getElementById(`body-${type}-${index}`);
    const schema = schemas[type];
    const item = data[type][index];
    
    // Render full details view
    let html = '<div class="field-grid-full">';
    
    for (const [fieldKey, fieldDef] of Object.entries(schema.fields)) {
        const value = item[fieldKey] || "";
        if (fieldKey === 'id') continue;
        
        if (value) {
            html += `<div class="field-display">`;
            html += `<div class="field-label">${fieldDef.label}</div>`;
            
            if (fieldDef.type === "links" || fieldDef.type === "link") {
                html += `<div class="field-value">${renderLinksPreview(value, fieldDef.targets)}</div>`;
            } else if (fieldDef.type === "textarea") {
                html += `<div class="field-value field-multiline">${escapeHtml(value)}</div>`;
            } else {
                html += `<div class="field-value">${escapeHtml(value)}</div>`;
            }
            
            html += `</div>`;
        }
    }
    
    // Add collapse button
    html += `<div class="expand-details">
        <button class="btn-expand" onclick="collapseDetails('${type}', ${index}, event)">
            ▲ Show Less
        </button>
    </div>`;
    
    html += '</div>';
    
    viewMode.innerHTML = html;
}

function collapseDetails(type, index, event) {
    event.stopPropagation();
    
    const viewMode = document.getElementById(`body-${type}-${index}`);
    const item = data[type][index];
    
    // Re-render summary view
    viewMode.innerHTML = renderFieldsView(type, item, index);
}

function renderFieldsEdit(type, item, index) {
    const schema = schemas[type];
    let html = '<div class="field-grid-edit">';
    
    for (const [fieldKey, fieldDef] of Object.entries(schema.fields)) {
        const value = item[fieldKey] || "";
        const fieldId = `field-${type}-${index}-${fieldKey}`;
        
        html += `<div class="input-group">`;
        html += `<label>${fieldDef.label}${fieldDef.required ? ' *' : ''}</label>`;
        
        if (fieldDef.type === "textarea") {
            html += `<textarea id="${fieldId}" data-original="${escapeHtml(value)}">${escapeHtml(value)}</textarea>`;
        } else if (fieldDef.type === "links" || fieldDef.type === "link") {
            html += `<input type="text" id="${fieldId}" value="${escapeHtml(value)}" placeholder="Comma-separated IDs" data-original="${escapeHtml(value)}">`;
            html += `<div class="help-text">Enter IDs separated by commas (e.g., C1, C2, F1)</div>`;
        } else {
            html += `<input type="text" id="${fieldId}" value="${escapeHtml(value)}" data-original="${escapeHtml(value)}">`;
        }
        
        html += `</div>`;
    }
    
    html += '</div>';
    return html;
}

function toggleEditMode(type, index, event) {
    event.stopPropagation();
    
    const viewMode = document.getElementById(`body-${type}-${index}`);
    const editMode = document.getElementById(`body-edit-${type}-${index}`);
    const editBtn = event.target.closest('.btn-edit');
    
    const isCurrentlyEditing = editMode.style.display !== 'none';
    
    if (isCurrentlyEditing) {
        // Switch back to view mode
        viewMode.style.display = 'block';
        editMode.style.display = 'none';
        editBtn.innerHTML = '✏️ Edit';
        editBtn.classList.remove('editing');
    } else {
        // Switch to edit mode
        viewMode.style.display = 'none';
        editMode.style.display = 'block';
        editBtn.innerHTML = '👁️ View';
        editBtn.classList.add('editing');
    }
}

function saveEdit(type, index) {
    const schema = schemas[type];
    let hasChanges = false;
    
    // Collect all field values
    for (const fieldKey of Object.keys(schema.fields)) {
        const fieldId = `field-${type}-${index}-${fieldKey}`;
        const inputEl = document.getElementById(fieldId);
        
        if (inputEl) {
            const newValue = inputEl.value;
            const oldValue = data[type][index][fieldKey] || "";
            
            if (newValue !== oldValue) {
                data[type][index][fieldKey] = newValue;
                hasChanges = true;
            }
        }
    }
    
    if (hasChanges) {
        saveToLocalStorage();
        renderSidebarNav();
        
        // Re-render the card
        const card = document.getElementById(`card-${type}-${data[type][index].id}`);
        const newCard = createComponentCard(type, data[type][index], index);
        card.replaceWith(newCard);
        
        showToast("Changes saved successfully!", "success");
    } else {
        // Just switch back to view mode
        toggleEditMode(type, index, { target: document.querySelector(`#card-${type}-${data[type][index].id} .btn-edit`), stopPropagation: () => {} });
    }
}

function cancelEdit(type, index) {
    const schema = schemas[type];
    
    // Restore original values
    for (const fieldKey of Object.keys(schema.fields)) {
        const fieldId = `field-${type}-${index}-${fieldKey}`;
        const inputEl = document.getElementById(fieldId);
        
        if (inputEl && inputEl.dataset.original !== undefined) {
            inputEl.value = inputEl.dataset.original;
        }
    }
    
    // Switch back to view mode
    const viewMode = document.getElementById(`body-${type}-${index}`);
    const editMode = document.getElementById(`body-edit-${type}-${index}`);
    const card = document.getElementById(`card-${type}-${data[type][index].id}`);
    const editBtn = card.querySelector('.btn-edit');
    
    viewMode.style.display = 'block';
    editMode.style.display = 'none';
    editBtn.innerHTML = '✏️ Edit';
    editBtn.classList.remove('editing');
    
    showToast("Changes discarded", "info", 2000);
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
