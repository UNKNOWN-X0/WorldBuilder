// Theme definitions - with gradients and visual depth
const themes = {
    light: {
        name: "Light Modern",
        accent: "#10b981",
        accentDark: "#059669",
        accentLight: "#34d399",
        bg: "#f0f4f8",
        card: "#ffffff",
        cardHover: "#f8fafc",
        text: "#1e293b",
        textDim: "#64748b",
        border: "#e2e8f0",
        bgPattern: "linear-gradient(to bottom, #f0f4f8, #e0e7ef)",
        sidebarGradient: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        cardGradient: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
    },
    fantasy: {
        name: "Enchanted Forest",
        accent: "#10b981",
        accentDark: "#059669",
        accentLight: "#6ee7b7",
        bg: "#0a1810",
        card: "#0f2318",
        cardHover: "#1a3828",
        text: "#d1fae5",
        textDim: "#6ee7b7",
        border: "#1f4d32",
        bgPattern: "radial-gradient(circle at top right, #0f2d1c 0%, #0a1810 50%, #050c08 100%)",
        sidebarGradient: "linear-gradient(180deg, #0f2318 0%, #0a1810 100%)",
        cardGradient: "linear-gradient(135deg, #0f2318 0%, #1a3828 100%)"
    },
    darkFantasy: {
        name: "Shadow Realm",
        accent: "#c084fc",
        accentDark: "#9333ea",
        accentLight: "#e9d5ff",
        bg: "#0f0a1a",
        card: "#1a1028",
        cardHover: "#2a1838",
        text: "#f3e8ff",
        textDim: "#d8b4fe",
        border: "#4a2d5a",
        bgPattern: "radial-gradient(ellipse at bottom, #2a1838 0%, #1a1028 50%, #0f0a1a 100%)",
        sidebarGradient: "linear-gradient(180deg, #1a1028 0%, #0f0a1a 100%)",
        cardGradient: "linear-gradient(135deg, #1a1028 0%, #2a1838 100%)"
    },
    scifi: {
        name: "Neon Cybercity",
        accent: "#06b6d4",
        accentDark: "#0891b2",
        accentLight: "#67e8f9",
        bg: "#0a1420",
        card: "#0f1e2e",
        cardHover: "#1a324d",
        text: "#cffafe",
        textDim: "#67e8f9",
        border: "#1e4d6b",
        bgPattern: "linear-gradient(135deg, #0a1420 0%, #1a2332 50%, #0f1e2e 100%)",
        sidebarGradient: "linear-gradient(180deg, #0f1e2e 0%, #0a1420 100%)",
        cardGradient: "linear-gradient(135deg, rgba(15, 30, 46, 0.9) 0%, rgba(26, 50, 77, 0.6) 100%)"
    },
    cyberpunk: {
        name: "Neon Dreams",
        accent: "#f0abfc",
        accentDark: "#e879f9",
        accentLight: "#fae8ff",
        bg: "#0d0015",
        card: "#1a0b2e",
        cardHover: "#2d1548",
        text: "#fdf4ff",
        textDim: "#f0abfc",
        border: "#4c1d95",
        bgPattern: "radial-gradient(circle at top left, #2d1548 0%, #1a0b2e 30%, #0d0015 70%)",
        sidebarGradient: "linear-gradient(180deg, #1a0b2e 0%, #0d0015 100%)",
        cardGradient: "linear-gradient(135deg, #1a0b2e 0%, #2d1548 100%)"
    },
    xianxia: {
        name: "Golden Immortal",
        accent: "#fbbf24",
        accentDark: "#f59e0b",
        accentLight: "#fef3c7",
        bg: "#1a0f00",
        card: "#2d1f0a",
        cardHover: "#4d3514",
        text: "#fef3c7",
        textDim: "#fcd34d",
        border: "#6d5228",
        bgPattern: "radial-gradient(ellipse at center, #2d1f0a 0%, #1a0f00 70%)",
        sidebarGradient: "linear-gradient(180deg, #2d1f0a 0%, #1a0f00 100%)",
        cardGradient: "linear-gradient(135deg, #2d1f0a 0%, #4d3514 100%)"
    },
    wuxia: {
        name: "Blood Moon",
        accent: "#f87171",
        accentDark: "#dc2626",
        accentLight: "#fecaca",
        bg: "#1a0505",
        card: "#2d0f0f",
        cardHover: "#4d1818",
        text: "#fee2e2",
        textDim: "#fca5a5",
        border: "#7d2828",
        bgPattern: "radial-gradient(circle at center, #2d0f0f 0%, #1a0505 60%)",
        sidebarGradient: "linear-gradient(180deg, #2d0f0f 0%, #1a0505 100%)",
        cardGradient: "linear-gradient(135deg, #2d0f0f 0%, #4d1818 100%)"
    },
    cultivation: {
        name: "Jade Lotus",
        accent: "#4ade80",
        accentDark: "#22c55e",
        accentLight: "#bbf7d0",
        bg: "#0a1409",
        card: "#0f1f0d",
        cardHover: "#1f3d1a",
        text: "#dcfce7",
        textDim: "#86efac",
        border: "#2d5a27",
        bgPattern: "radial-gradient(ellipse at top, #1f3d1a 0%, #0f1f0d 40%, #0a1409 80%)",
        sidebarGradient: "linear-gradient(180deg, #0f1f0d 0%, #0a1409 100%)",
        cardGradient: "linear-gradient(135deg, #0f1f0d 0%, #1f3d1a 100%)"
    },
    litrpg: {
        name: "Game Interface",
        accent: "#a3e635",
        accentDark: "#84cc16",
        accentLight: "#d9f99d",
        bg: "#0f1810",
        card: "#1a2820",
        cardHover: "#2a4830",
        text: "#f0fdf4",
        textDim: "#bef264",
        border: "#3d6d3a",
        bgPattern: "linear-gradient(135deg, #0f1810 0%, #1a2820 50%, #2a4830 100%)",
        sidebarGradient: "linear-gradient(180deg, #1a2820 0%, #0f1810 100%)",
        cardGradient: "linear-gradient(135deg, rgba(26, 40, 32, 0.9) 0%, rgba(42, 72, 48, 0.6) 100%)"
    },
    horror: {
        name: "Crimson Terror",
        accent: "#ef4444",
        accentDark: "#dc2626",
        accentLight: "#fca5a5",
        bg: "#0a0a0a",
        card: "#1a1414",
        cardHover: "#2d2121",
        text: "#fafafa",
        textDim: "#dc2626",
        border: "#4a2e2e",
        bgPattern: "radial-gradient(circle at bottom right, #1a1414 0%, #0a0a0a 60%)",
        sidebarGradient: "linear-gradient(180deg, #1a1414 0%, #0a0a0a 100%)",
        cardGradient: "linear-gradient(135deg, #1a1414 0%, #2d2121 100%)"
    },
    cosmicHorror: {
        name: "Void Abyss",
        accent: "#a78bfa",
        accentDark: "#8b5cf6",
        accentLight: "#c4b5fd",
        bg: "#05050f",
        card: "#0d0d1f",
        cardHover: "#1a1a3e",
        text: "#e0e0ff",
        textDim: "#a5a5d4",
        border: "#2d2d5a",
        bgPattern: "radial-gradient(ellipse at center, #1a1a3e 0%, #0d0d1f 40%, #05050f 80%)",
        sidebarGradient: "linear-gradient(180deg, #0d0d1f 0%, #05050f 100%)",
        cardGradient: "linear-gradient(135deg, #0d0d1f 0%, #1a1a3e 100%)"
    },
    romance: {
        name: "Rose Garden",
        accent: "#f472b6",
        accentDark: "#ec4899",
        accentLight: "#fbcfe8",
        bg: "#1a0a14",
        card: "#2d1724",
        cardHover: "#4d2844",
        text: "#fce7f3",
        textDim: "#f9a8d4",
        border: "#7d3d67",
        bgPattern: "radial-gradient(circle at top right, #2d1724 0%, #1a0a14 60%)",
        sidebarGradient: "linear-gradient(180deg, #2d1724 0%, #1a0a14 100%)",
        cardGradient: "linear-gradient(135deg, #2d1724 0%, #4d2844 100%)"
    },
    ocean: {
        name: "Deep Sea",
        accent: "#3b82f6",
        accentDark: "#2563eb",
        accentLight: "#93c5fd",
        bg: "#020817",
        card: "#0c1e2e",
        cardHover: "#1e3a5f",
        text: "#dbeafe",
        textDim: "#60a5fa",
        border: "#1e4d7b",
        bgPattern: "radial-gradient(ellipse at top, #0c1e2e 0%, #020817 60%)",
        sidebarGradient: "linear-gradient(180deg, #0c1e2e 0%, #020817 100%)",
        cardGradient: "linear-gradient(135deg, #0c1e2e 0%, #1e3a5f 100%)"
    },
    sunset: {
        name: "Golden Hour",
        accent: "#f59e0b",
        accentDark: "#d97706",
        accentLight: "#fcd34d",
        bg: "#1a0f05",
        card: "#2d1f0f",
        cardHover: "#4d351f",
        text: "#fef3c7",
        textDim: "#fbbf24",
        border: "#6d4d2e",
        bgPattern: "linear-gradient(to bottom, #4d351f 0%, #2d1f0f 50%, #1a0f05 100%)",
        sidebarGradient: "linear-gradient(180deg, #2d1f0f 0%, #1a0f05 100%)",
        cardGradient: "linear-gradient(135deg, #2d1f0f 0%, #4d351f 100%)"
    },
    arctic: {
        name: "Frozen Tundra",
        accent: "#38bdf8",
        accentDark: "#0ea5e9",
        accentLight: "#bae6fd",
        bg: "#0f1419",
        card: "#1a2733",
        cardHover: "#2d4252",
        text: "#f0f9ff",
        textDim: "#7dd3fc",
        border: "#3d5d7b",
        bgPattern: "linear-gradient(135deg, #1a2733 0%, #0f1419 50%, #0a0f14 100%)",
        sidebarGradient: "linear-gradient(180deg, #1a2733 0%, #0f1419 100%)",
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
