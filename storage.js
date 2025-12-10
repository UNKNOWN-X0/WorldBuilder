// LocalStorage operations
function saveToLocalStorage() {
    try {
        localStorage.setItem("worldBuilderData", JSON.stringify(data));
    } catch (e) {
        console.error("Failed to save to localStorage:", e);
    }
}

function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem("worldBuilderData");
        if (saved) {
            const parsed = JSON.parse(saved);
            data = { ...data, ...parsed };
            if (!data.meta) {
                data.meta = { title: "My World", language: "en", theme: "fantasy" };
            }
        } else {
            initializeTemplateData();
        }
    } catch (e) {
        console.error("Failed to load from localStorage:", e);
        initializeTemplateData();
    }
}

function resetData() {
    if (confirm("Are you sure you want to reset all data? This cannot be undone.")) {
        localStorage.removeItem("worldBuilderData");
        initializeTemplateData();
        renderTabs();
        renderContent();
        updateMetaFields();
        showToast("Data reset to template", "success");
    }
}

// JSON Import/Export
async function loadFromLink() {
    const link = document.getElementById("linkInput").value.trim();
    const errorEl = document.getElementById("loadError");
    errorEl.innerHTML = "";
    
    if (!link) {
        errorEl.innerHTML = '<div class="error-message">Please enter a link</div>';
        return;
    }
    
    let fetchUrl = link;
    
    // Convert Google Drive links
    if (link.includes("drive.google.com")) {
        const match = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (match) {
            fetchUrl = `https://drive.google.com/uc?export=download&id=${match[1]}`;
        } else {
            errorEl.innerHTML = '<div class="error-message">Invalid Google Drive link format</div>';
            return;
        }
    }
    
    // Convert GitHub links
    if (link.includes("github.com") && link.includes("/blob/")) {
        fetchUrl = link.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
    }
    
    try {
        showToast("Loading...", "info", 2000);
        const response = await fetch(fetchUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const text = await response.text();
        
        // Check if response is HTML (Drive interstitial page)
        if (text.trim().startsWith("<!DOCTYPE") || text.trim().startsWith("<html")) {
            errorEl.innerHTML = '<div class="error-message">⚠️ Received HTML instead of JSON. Make sure file is publicly accessible.</div>';
            return;
        }
        
        const parsed = JSON.parse(text);
        
        if (!validateJSONStructure(parsed)) {
            errorEl.innerHTML = '<div class="error-message">Invalid JSON structure</div>';
            return;
        }
        
        data = parsed;
        saveToLocalStorage();
        closeModal('loadModal');
        renderTabs();
        renderContent();
        updateMetaFields();
        applyTheme(data.meta.theme || "fantasy");
        showToast("✓ Data loaded successfully!", "success");
        
    } catch (error) {
        errorEl.innerHTML = `<div class="error-message">Failed to load: ${escapeHtml(error.message)}</div>`;
    }
}

function loadFromJSON() {
    const jsonText = document.getElementById("jsonInput").value.trim();
    const errorEl = document.getElementById("loadError");
    errorEl.innerHTML = "";
    
    if (!jsonText) {
        errorEl.innerHTML = '<div class="error-message">Please paste JSON data</div>';
        return;
    }
    
    try {
        const parsed = JSON.parse(jsonText);
        
        if (!validateJSONStructure(parsed)) {
            errorEl.innerHTML = '<div class="error-message">Invalid JSON structure</div>';
            return;
        }
        
        data = parsed;
        saveToLocalStorage();
        closeModal('loadModal');
        renderTabs();
        renderContent();
        updateMetaFields();
        applyTheme(data.meta.theme || "fantasy");
        showToast("✓ Data loaded successfully!", "success");
        
    } catch (error) {
        errorEl.innerHTML = `<div class="error-message">JSON Parse Error: ${escapeHtml(error.message)}</div>`;
    }
}

function validateJSONStructure(obj) {
    const requiredKeys = ["characters", "locations", "factions", "items"];
    const hasRequiredKeys = requiredKeys.some(key => obj.hasOwnProperty(key));
    return hasRequiredKeys && typeof obj === "object";
}

function downloadJSON() {
    try {
        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement("a");
        a.href = url;
        a.download = `${data.meta.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast("✓ JSON downloaded!", "success");
    } catch (error) {
        showToast("Failed to download: " + error.message, "error");
    }
}

function copyJSON() {
    try {
        const jsonString = JSON.stringify(data, null, 2);
        navigator.clipboard.writeText(jsonString).then(() => {
            showToast("✓ JSON copied to clipboard!", "success");
        }).catch(err => {
            const textarea = document.createElement("textarea");
            textarea.value = jsonString;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            showToast("✓ JSON copied to clipboard!", "success");
        });
    } catch (error) {
        showToast("Failed to copy: " + error.message, "error");
    }
}

function openJSONPreview() {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
    setTimeout(() => URL.revokeObjectURL(url), 100);
}

function updateMetaFields() {
    const titleInput = document.getElementById("projectTitleSidebar");
    const langInput = document.getElementById("projectLanguage");
    const authorInput = document.getElementById("projectAuthor");
    
    if (titleInput) titleInput.value = data.meta.title || "";
    if (langInput) langInput.value = data.meta.language || "en";
    if (authorInput) authorInput.value = data.meta.author || "";
    
    updateSidebarTitle();
    updateBreadcrumb();
}

function updateMeta(field, value) {
    data.meta[field] = value;
    saveToLocalStorage();
}
