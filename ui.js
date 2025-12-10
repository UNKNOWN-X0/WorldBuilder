// UI Rendering functions

function renderSidebarNav() {
    const navEl = document.getElementById("sidebarNav");
    if (!navEl) return;
    
    navEl.innerHTML = "";
    
    Object.keys(schemas).forEach(key => {
        const schema = schemas[key];
        const item = document.createElement("div");
        item.className = "sidebar-nav-item" + (key === currentTab ? " active" : "");
        item.onclick = () => {
            currentTab = key;
            renderSidebarNav();
            renderContent();
            updateBreadcrumb();
        };
        
        item.innerHTML = `
            <div class="sidebar-nav-item-content">
                <span class="sidebar-nav-item-icon">${schema.icon}</span>
                <span>${schema.label}</span>
            </div>
            <span class="sidebar-nav-item-count">${data[key].length}</span>
        `;
        
        navEl.appendChild(item);
    });
}

function renderContent() {
    const content = document.getElementById("content");
    if (!content) return;
    
    const schema = schemas[currentTab];
    const items = data[currentTab];
    
    // Update content title and subtitle
    updateContentHeader();
    
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filtered = searchTerm ? items.filter(item => {
        const searchableText = JSON.stringify(item).toLowerCase();
        return searchableText.includes(searchTerm);
    }) : items;

    content.innerHTML = '<div class="component-list" id="componentList"></div>';

    const listEl = document.getElementById("componentList");
    
    if (filtered.length === 0 && searchTerm) {
        listEl.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-title">No results found</div>
                <p>Try adjusting your search terms</p>
            </div>
        `;
    } else if (filtered.length === 0 && !searchTerm) {
        listEl.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-title">No entries yet.</div>
                <p>Create your first ${schema.label.toLowerCase().slice(0, -1)} to get started.</p>
                <button class="btn-add-new" onclick="addComponent('${currentTab}')" style="margin: 20px auto 0; display: inline-flex;">
                    <span class="btn-icon">+</span> Create New
                </button>
            </div>
        `;
    } else {
        filtered.forEach((item, index) => {
            const actualIndex = items.indexOf(item);
            listEl.appendChild(createComponentCard(currentTab, item, actualIndex));
        });
    }
}

function updateContentHeader() {
    const schema = schemas[currentTab];
    const titleEl = document.getElementById("contentTitle");
    const subtitleEl = document.getElementById("contentSubtitle");
    
    if (titleEl) titleEl.textContent = schema.label;
    if (subtitleEl) {
        const subtitles = {
            characters: "People and beings in your world.",
            minorEvents: "Small plot points and scenes.",
            majorEvents: "Turning points and plot beats.",
            globalEvents: "World-shaping historical events.",
            locations: "Places and settings.",
            factions: "Groups, organizations, and alliances.",
            items: "Objects, artifacts, and equipment.",
            lore: "Knowledge, myths, and world mechanics.",
            worldRules: "Laws and systems governing your world."
        };
        subtitleEl.textContent = subtitles[currentTab] || "";
    }
}

function updateBreadcrumb() {
    const projectEl = document.getElementById("breadcrumbProject");
    const sectionEl = document.getElementById("breadcrumbSection");
    const schema = schemas[currentTab];
    
    if (projectEl) projectEl.textContent = data.meta.title || "My World";
    if (sectionEl) sectionEl.textContent = schema.label;
}

function updateSidebarTitle() {
    const titleEl = document.getElementById("sidebarProjectTitle");
    if (titleEl) titleEl.textContent = data.meta.title || "Novel Org";
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

function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
        sidebar.classList.toggle("open");
    }
}

// Toast notifications
let toastTimeout;
function showToast(message, type = "info", duration = 3000) {
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
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        downloadJSON();
    }
    
    if (e.key === "Escape") {
        document.querySelectorAll(".modal").forEach(modal => {
            modal.classList.remove("active");
        });
    }
});
