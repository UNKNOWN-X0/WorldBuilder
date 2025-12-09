// Theme definitions with expanded variety
const themes = {
    fantasy: {
        name: "🌲 Fantasy",
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
        name: "🚀 Sci-Fi",
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
    cyberpunk: {
        name: "🌃 Cyberpunk",
        accent: "#f0abfc",
        accentDark: "#d946ef",
        accentLight: "#fae8ff",
        bg: "#0a0118",
        card: "#1a0b2e",
        cardHover: "#2d1b4e",
        text: "#fdf4ff",
        textDim: "#e9d5ff",
        border: "#4c1d95"
    },
    horror: {
        name: "🩸 Horror",
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
        name: "🔮 Mystery",
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
        name: "⚙️ Steampunk",
        accent: "#d97706",
        accentDark: "#b45309",
        accentLight: "#f59e0b",
        bg: "#1c1917",
        card: "#292524",
        cardHover: "#44403c",
        text: "#fef3c7",
        textDim: "#d6d3d1",
        border: "#44403c"
    },
    apocalypse: {
        name: "☢️ Apocalypse",
        accent: "#84cc16",
        accentDark: "#65a30d",
        accentLight: "#a3e635",
        bg: "#1a1410",
        card: "#2c2419",
        cardHover: "#3f3325",
        text: "#fef3c7",
        textDim: "#d4c5a0",
        border: "#57472e"
    },
    ocean: {
        name: "🌊 Ocean Deep",
        accent: "#0ea5e9",
        accentDark: "#0284c7",
        accentLight: "#38bdf8",
        bg: "#020617",
        card: "#0c1e2e",
        cardHover: "#1e3a5f",
        text: "#e0f2fe",
        textDim: "#7dd3fc",
        border: "#1e3a5f"
    },
    vampire: {
        name: "🧛 Vampire",
        accent: "#a21caf",
        accentDark: "#86198f",
        accentLight: "#c026d3",
        bg: "#18001a",
        card: "#2d0a2e",
        cardHover: "#4a154b",
        text: "#fae8ff",
        textDim: "#e9d5ff",
        border: "#4a154b"
    },
    desert: {
        name: "🏜️ Desert Sun",
        accent: "#f97316",
        accentDark: "#ea580c",
        accentLight: "#fb923c",
        bg: "#1c1410",
        card: "#2d231c",
        cardHover: "#44342a",
        text: "#fff7ed",
        textDim: "#fed7aa",
        border: "#57442e"
    },
    forest: {
        name: "🌿 Forest",
        accent: "#22c55e",
        accentDark: "#16a34a",
        accentLight: "#4ade80",
        bg: "#0a1409",
        card: "#132711",
        cardHover: "#1f3d1a",
        text: "#f0fdf4",
        textDim: "#bbf7d0",
        border: "#2d5a27"
    },
    arctic: {
        name: "❄️ Arctic",
        accent: "#38bdf8",
        accentDark: "#0ea5e9",
        accentLight: "#7dd3fc",
        bg: "#0f1419",
        card: "#1a2733",
        cardHover: "#2d3f52",
        text: "#f0f9ff",
        textDim: "#bae6fd",
        border: "#334e68"
    },
    noir: {
        name: "🎬 Film Noir",
        accent: "#f5f5f5",
        accentDark: "#d4d4d4",
        accentLight: "#ffffff",
        bg: "#0a0a0a",
        card: "#1a1a1a",
        cardHover: "#2a2a2a",
        text: "#f5f5f5",
        textDim: "#a3a3a3",
        border: "#404040"
    },
    sunset: {
        name: "🌅 Sunset",
        accent: "#fb7185",
        accentDark: "#f43f5e",
        accentLight: "#fda4af",
        bg: "#1a0f1e",
        card: "#2d1b33",
        cardHover: "#3d2644",
        text: "#fdf2f8",
        textDim: "#fbbf24",
        border: "#4a2d55"
    },
    space: {
        name: "🌌 Deep Space",
        accent: "#8b5cf6",
        accentDark: "#7c3aed",
        accentLight: "#a78bfa",
        bg: "#050510",
        card: "#0d0d1e",
        cardHover: "#1a1a3e",
        text: "#f5f3ff",
        textDim: "#c4b5fd",
        border: "#2d2d5a"
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
