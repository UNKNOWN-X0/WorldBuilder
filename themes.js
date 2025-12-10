// Theme definitions - optimized for readability and genre feel
const themes = {
    light: {
        name: "Light (Default)",
        accent: "#10b981",
        accentDark: "#059669",
        accentLight: "#34d399",
        bg: "#f8f9fa",
        card: "#ffffff",
        cardHover: "#f1f3f5",
        text: "#212529",
        textDim: "#6c757d",
        border: "#dee2e6"
    },
    fantasy: {
        name: "Fantasy",
        accent: "#10b981",
        accentDark: "#059669",
        accentLight: "#34d399",
        bg: "#0f1419",
        card: "#1a2332",
        cardHover: "#243447",
        text: "#e8f0f2",
        textDim: "#94a3b8",
        border: "#2d3f54"
    },
    darkFantasy: {
        name: "Dark Fantasy",
        accent: "#a855f7",
        accentDark: "#9333ea",
        accentLight: "#c084fc",
        bg: "#0a0a0f",
        card: "#18181f",
        cardHover: "#27272f",
        text: "#e9d5ff",
        textDim: "#a78bfa",
        border: "#3f3f46"
    },
    scifi: {
        name: "Sci-Fi",
        accent: "#06b6d4",
        accentDark: "#0891b2",
        accentLight: "#22d3ee",
        bg: "#0a1420",
        card: "#0f1e2e",
        cardHover: "#1a2f44",
        text: "#e0f2fe",
        textDim: "#7dd3fc",
        border: "#1e3a52"
    },
    cyberpunk: {
        name: "Cyberpunk",
        accent: "#f0abfc",
        accentDark: "#e879f9",
        accentLight: "#fae8ff",
        bg: "#0d0015",
        card: "#1a0b2e",
        cardHover: "#2d1548",
        text: "#fdf4ff",
        textDim: "#e9d5ff",
        border: "#4c1d95"
    },
    xianxia: {
        name: "Xianxia",
        accent: "#f59e0b",
        accentDark: "#d97706",
        accentLight: "#fbbf24",
        bg: "#1a0f00",
        card: "#2d1f0a",
        cardHover: "#402d14",
        text: "#fef3c7",
        textDim: "#fcd34d",
        border: "#57442e"
    },
    wuxia: {
        name: "Wuxia",
        accent: "#ef4444",
        accentDark: "#dc2626",
        accentLight: "#f87171",
        bg: "#1a0505",
        card: "#2d0f0f",
        cardHover: "#401818",
        text: "#fee2e2",
        textDim: "#fca5a5",
        border: "#5a2a2a"
    },
    cultivation: {
        name: "Cultivation",
        accent: "#22c55e",
        accentDark: "#16a34a",
        accentLight: "#4ade80",
        bg: "#0a1409",
        card: "#0f1f0d",
        cardHover: "#1a2e18",
        text: "#dcfce7",
        textDim: "#86efac",
        border: "#2d5a27"
    },
    litrpg: {
        name: "LitRPG",
        accent: "#84cc16",
        accentDark: "#65a30d",
        accentLight: "#a3e635",
        bg: "#0f1810",
        card: "#1a2820",
        cardHover: "#253830",
        text: "#f0fdf4",
        textDim: "#bbf7d0",
        border: "#2d5a27"
    },
    horror: {
        name: "Horror",
        accent: "#dc2626",
        accentDark: "#991b1b",
        accentLight: "#ef4444",
        bg: "#0a0a0a",
        card: "#1a1414",
        cardHover: "#2a2121",
        text: "#fafafa",
        textDim: "#a3a3a3",
        border: "#3a2e2e"
    },
    cosmicHorror: {
        name: "Cosmic Horror",
        accent: "#8b5cf6",
        accentDark: "#7c3aed",
        accentLight: "#a78bfa",
        bg: "#05050f",
        card: "#0d0d1f",
        cardHover: "#181830",
        text: "#e0e0ff",
        textDim: "#a5a5d4",
        border: "#2d2d5a"
    },
    thriller: {
        name: "Thriller",
        accent: "#ef4444",
        accentDark: "#dc2626",
        accentLight: "#f87171",
        bg: "#12100f",
        card: "#1f1d1c",
        cardHover: "#2d2a29",
        text: "#fef2f2",
        textDim: "#fca5a5",
        border: "#44403c"
    },
    mystery: {
        name: "Mystery",
        accent: "#6366f1",
        accentDark: "#4f46e5",
        accentLight: "#818cf8",
        bg: "#0f0e1a",
        card: "#1a1828",
        cardHover: "#252337",
        text: "#e0e7ff",
        textDim: "#c7d2fe",
        border: "#3730a3"
    },
    noir: {
        name: "Film Noir",
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
    romance: {
        name: "Romance",
        accent: "#ec4899",
        accentDark: "#db2777",
        accentLight: "#f472b6",
        bg: "#1a0a14",
        card: "#2d1724",
        cardHover: "#402333",
        text: "#fce7f3",
        textDim: "#f9a8d4",
        border: "#5a2d47"
    },
    youngAdult: {
        name: "Young Adult",
        accent: "#a855f7",
        accentDark: "#9333ea",
        accentLight: "#c084fc",
        bg: "#0f0a1a",
        card: "#1a1428",
        cardHover: "#251f37",
        text: "#f3e8ff",
        textDim: "#e9d5ff",
        border: "#4c1d95"
    },
    adventure: {
        name: "Adventure",
        accent: "#f97316",
        accentDark: "#ea580c",
        accentLight: "#fb923c",
        bg: "#1a0f05",
        card: "#2d1f0f",
        cardHover: "#402d18",
        text: "#fff7ed",
        textDim: "#fed7aa",
        border: "#57442e"
    },
    historical: {
        name: "Historical",
        accent: "#92400e",
        accentDark: "#78350f",
        accentLight: "#c2410c",
        bg: "#1a1410",
        card: "#2c2419",
        cardHover: "#3f3325",
        text: "#fef3c7",
        textDim: "#fde68a",
        border: "#57472e"
    },
    steampunk: {
        name: "Steampunk",
        accent: "#d97706",
        accentDark: "#b45309",
        accentLight: "#f59e0b",
        bg: "#1a1410",
        card: "#2d231c",
        cardHover: "#40332a",
        text: "#fef3c7",
        textDim: "#fcd34d",
        border: "#57442e"
    },
    dystopian: {
        name: "Dystopian",
        accent: "#71717a",
        accentDark: "#52525b",
        accentLight: "#a1a1aa",
        bg: "#0f0f0f",
        card: "#1a1a1a",
        cardHover: "#272727",
        text: "#e4e4e7",
        textDim: "#a1a1aa",
        border: "#3f3f46"
    },
    postApocalyptic: {
        name: "Post-Apocalyptic",
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
    supernatural: {
        name: "Supernatural",
        accent: "#8b5cf6",
        accentDark: "#7c3aed",
        accentLight: "#a78bfa",
        bg: "#0a0514",
        card: "#170f2d",
        cardHover: "#251a40",
        text: "#ede9fe",
        textDim: "#c4b5fd",
        border: "#4c1d95"
    },
    urban: {
        name: "Urban Fantasy",
        accent: "#06b6d4",
        accentDark: "#0891b2",
        accentLight: "#22d3ee",
        bg: "#0f1419",
        card: "#1a2332",
        cardHover: "#243447",
        text: "#e0f2fe",
        textDim: "#7dd3fc",
        border: "#2d3f54"
    },
    magicalRealism: {
        name: "Magical Realism",
        accent: "#d946ef",
        accentDark: "#c026d3",
        accentLight: "#e879f9",
        bg: "#14050a",
        card: "#2d0f1e",
        cardHover: "#401a2e",
        text: "#fae8ff",
        textDim: "#f0abfc",
        border: "#5a2d47"
    },
    comedy: {
        name: "Comedy",
        accent: "#fbbf24",
        accentDark: "#f59e0b",
        accentLight: "#fcd34d",
        bg: "#1a1410",
        card: "#2d231c",
        cardHover: "#40332a",
        text: "#fef3c7",
        textDim: "#fde68a",
        border: "#57442e"
    },
    western: {
        name: "Western",
        accent: "#92400e",
        accentDark: "#78350f",
        accentLight: "#b45309",
        bg: "#1a0f05",
        card: "#2d1f0f",
        cardHover: "#402d18",
        text: "#fef3c7",
        textDim: "#fed7aa",
        border: "#57442e"
    },
    space: {
        name: "Space Opera",
        accent: "#a855f7",
        accentDark: "#9333ea",
        accentLight: "#c084fc",
        bg: "#050510",
        card: "#0d0d1e",
        cardHover: "#1a1a3e",
        text: "#f3e8ff",
        textDim: "#e9d5ff",
        border: "#2d2d5a"
    },
    military: {
        name: "Military",
        accent: "#65a30d",
        accentDark: "#4d7c0f",
        accentLight: "#84cc16",
        bg: "#0a0f05",
        card: "#141f0a",
        cardHover: "#1f2e14",
        text: "#f0fdf4",
        textDim: "#bbf7d0",
        border: "#2d5a27"
    }
};

// Apply theme to document
function applyTheme(themeName) {
    const theme = themes[themeName] || themes.light;
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
    
    // Add or remove dark-theme class based on theme
    if (themeName === 'light') {
        document.body.classList.remove('dark-theme');
        // Override for light theme
        root.style.setProperty('--sidebar-bg', '#ffffff');
    } else {
        document.body.classList.add('dark-theme');
        root.style.setProperty('--sidebar-bg', theme.card);
    }
    
    data.meta.theme = themeName;
    saveToLocalStorage();
    
    // Update active theme in picker
    updateThemePickerUI();
    
    // Update theme select in sidebar
    const themeSelect = document.getElementById("themeSelect");
    if (themeSelect) {
        themeSelect.value = themeName;
    }
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
    const currentTheme = data.meta.theme || "light";
    
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
