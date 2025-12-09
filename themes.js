// Theme definitions
const themes = {
    fantasy: {
        name: "Fantasy",
        accent: "#10b981",
        accentDark: "#059669",
        accentLight: "#34d399",
        bg: "#0f172a",
        card: "#1e293b",
        cardHover: "#334155",
        text: "#f1f5f9",
        textDim: "#94a3b8",
        border: "#334155"
    },
    scifi: {
        name: "Sci-Fi",
        accent: "#06b6d4",
        accentDark: "#0891b2",
        accentLight: "#22d3ee",
        bg: "#0c0a09",
        card: "#1c1917",
        cardHover: "#292524",
        text: "#fafaf9",
        textDim: "#a8a29e",
        border: "#292524"
    },
    horror: {
        name: "Horror",
        accent: "#dc2626",
        accentDark: "#991b1b",
        accentLight: "#ef4444",
        bg: "#0a0a0a",
        card: "#171717",
        cardHover: "#262626",
        text: "#fafafa",
        textDim: "#a3a3a3",
        border: "#262626"
    },
    mystery: {
        name: "Mystery",
        accent: "#6366f1",
        accentDark: "#4f46e5",
        accentLight: "#818cf8",
        bg: "#1e1b29",
        card: "#2d2a3d",
        cardHover: "#3d3a4f",
        text: "#f5f3ff",
        textDim: "#c4b5fd",
        border: "#3d3a4f"
    },
    steampunk: {
        name: "Steampunk",
        accent: "#d97706",
        accentDark: "#b45309",
        accentLight: "#f59e0b",
        bg: "#1c1917",
        card: "#292524",
        cardHover: "#3f3f46",
        text: "#fef3c7",
        textDim: "#d6d3d1",
        border: "#3f3f46"
    }
};

// Apply theme to document
function applyTheme(themeName) {
    const theme = themes[themeName] || themes.fantasy;
    const root = document.documentElement;
    
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-dark', theme.accentDark);
    root.style.setProperty('--accent-light', theme.accentLight);
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--card', theme.card);
    root.style.setProperty('--card-hover', theme.cardHover);
    root.style.setProperty('--text', theme.text);
    root.style.setProperty('--text-dim', theme.textDim);
    root.style.setProperty('--border', theme.border);
    
    data.meta.theme = themeName;
    saveToLocalStorage();
    
    // Update active theme in picker
    updateThemePickerUI();
}

// Render theme picker UI
function renderThemePicker() {
    const picker = document.getElementById("themePicker");
    if (!picker) return;
    
    picker.innerHTML = "";
    
    for (const [key, theme] of Object.entries(themes)) {
        const option = document.createElement("div");
        option.className = "theme-option";
        option.textContent = theme.name;
        option.onclick = () => applyTheme(key);
        
        // Add color preview
        option.style.borderLeftWidth = "4px";
        option.style.borderLeftColor = theme.accent;
        
        picker.appendChild(option);
    }
    
    updateThemePickerUI();
}

// Update theme picker active state
function updateThemePickerUI() {
    const options = document.querySelectorAll(".theme-option");
    const currentTheme = data.meta.theme || "fantasy";
    
    options.forEach((option, index) => {
        const themeKey = Object.keys(themes)[index];
        if (themeKey === currentTheme) {
            option.classList.add("active");
        } else {
            option.classList.remove("active");
        }
    });
}

// Set text direction
function setTextDirection(direction) {
    document.body.setAttribute("dir", direction);
    localStorage.setItem("textDirection", direction);
}
