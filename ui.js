// UI Rendering functions

function renderTabs() {
    const tabsEl = document.getElementById("tabs");
    if (!tabsEl) return;
    
    tabsEl.innerHTML = "";
    Object.keys(schemas).forEach(key => {
        const schema = schemas[key];
        const tab = document.createElement("button");
        tab.className = "tab" + (key === currentTab ? " active" : "");
        tab.textContent = `${schema.icon} ${schema.label} (${data[key].length})`;
        tab.onclick = () => {
            currentTab = key;
            renderTabs();
            renderContent();
        };
        tabsEl.appendChild(tab);
    });
}

function renderContent() {
    const content = document.getElementById("content");
    if (!content) return;
    
    const schema = schemas[currentTab];
    const items = data[currentTab];
    
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filtered = searchTerm ? items.filter(item => {
        const searchableText = JSON.stringify(item).toLowerCase();
        return searchableText.includes(searchTerm);
    }) : items;

    content.innerHTML = `
        <div class="component-list" id="componentList"></div>
        <button class="add-component-btn" onclick="addComponent('${currentTab}')">
            ➕ Add New ${schema.label.slice(0, -1)}
        </button>
    `;

    const listEl = document.getElementById("componentList");
    filtered.forEach((item, index) => {
        const actualIndex = items.indexOf(item);
        listEl.appendChild(createComponentCard(currentTab, item, actualIndex));
    });
    
    // Show message if search has no results or empty state
    if (filtered.length === 0 && searchTerm) {
        listEl.innerHTML = '<div class="empty-state">🔍 No components match your search</div>';
    } else if (filtered.length === 0 && !searchTerm) {
        listEl.innerHTML = `<div class="empty-state">📝 No ${schema.label.toLowerCase()} yet. Click the button below to add one!</div>`;
    }
}

// Modal controls
function showLoadModal() {
    document.getElementById("loadModal").classList.add("active");
    document.getElementById("linkInput").value = "";
    document.getElementById("jsonInput").value = "";
    document.getElementById("loadError").innerHTML = "";
}

function showSettingsModal() {
    document.getElementById("settingsModal").classList.add("active");
}

function closeModal(id) {
    document.getElementById(id).classList.remove("active");
}

// Toast notifications
let toastTimeout;
function showToast(message, type = "info", duration = 3000) {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll(".toast");
    existingToasts.forEach(t => t.remove());
    
    const toast = document.createElement("div");
    toast.className = "toast";
    
    let icon = "ℹ️";
    if (type === "success") icon = "✓";
    else if (type === "warning") icon = "⚠️";
    else if (type === "error") icon = "✗";
    
    toast.innerHTML = `<strong>${icon}</strong> ${message}`;
    document.body.appendChild(toast);
    
    if (toastTimeout) clearTimeout(toastTimeout);
    
    toastTimeout = setTimeout(() => {
        toast.remove();
    }, duration);
}

// Close modals on background click
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        e.target.classList.remove("active");
    }
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
    // Ctrl/Cmd + S to save (download)
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        downloadJSON();
    }
    
    // Escape to close modals
    if (e.key === "Escape") {
        document.querySelectorAll(".modal").forEach(modal => {
            modal.classList.remove("active");
        });
    }
});
