// Main application initialization

// Initialize the application
function init() {
    console.log("🌍 World Builder initializing...");
    
    // Load data from localStorage or use template
    loadFromLocalStorage();
    
    // Render UI
    renderSidebarNav();
    renderContent();
    renderThemePicker();
    updateMetaFields();
    updateBreadcrumb();
    updateSidebarTitle();
    populateThemeSelect();
    
    // Apply saved theme
    applyTheme(data.meta.theme || "fantasy");
    
    // Set text direction if saved
    const savedDirection = localStorage.getItem("textDirection") || "ltr";
    document.body.setAttribute("dir", savedDirection);
    const dirSelect = document.getElementById("textDirection");
    if (dirSelect) dirSelect.value = savedDirection;
    
    console.log("✓ World Builder initialized successfully");
}

// Populate theme select in sidebar
function populateThemeSelect() {
    const select = document.getElementById("themeSelect");
    if (!select) return;
    
    select.innerHTML = "";
    for (const [key, theme] of Object.entries(themes)) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = theme.name;
        if (key === (data.meta.theme || "fantasy")) {
            option.selected = true;
        }
        select.appendChild(option);
    }
}

// Start application when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

// Warn before leaving if there's unsaved data
window.addEventListener("beforeunload", (e) => {
    const hasData = data.characters.length > 0 || 
                    data.locations.length > 0 || 
                    data.factions.length > 0;
    
    if (hasData) {
        e.preventDefault();
        e.returnValue = "";
    }
});
