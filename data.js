// Global data structure
let data = {
    characters: [],
    minorEvents: [],
    majorEvents: [],
    globalEvents: [],
    locations: [],
    factions: [],
    items: [],
    lore: [],
    worldRules: [],
    meta: {
        title: "My World",
        language: "en",
        theme: "fantasy"
    }
};

// State management
let currentTab = "characters";
let lastDeletedItem = null;
let lastDeletedType = null;

// Generate unique ID for a component type
function generateId(type) {
    const prefix = type.charAt(0).toUpperCase();
    let counter = 1;
    while (data[type].find(item => item.id === `${prefix}${counter}`)) {
        counter++;
    }
    return `${prefix}${counter}`;
}

// Find item by ID across all types
function findById(id) {
    for (const [type, items] of Object.entries(data)) {
        if (type === "meta") continue;
        const found = items.find(item => item.id === id);
        if (found) return { type, item: found };
    }
    return null;
}

// Resolve link to get item details
function resolveLink(id, targets) {
    if (!targets) return null;
    for (const target of targets) {
        const found = data[target].find(item => item.id === id);
        if (found) return found;
    }
    return null;
}

// Initialize with template data
function initializeTemplateData() {
    data = {
        characters: [
            {
                id: "C1",
                name: "Hero",
                role: "Protagonist",
                age: "25",
                power_level: "A-Rank",
                power_source: "LO1",
                appearance: "Tall with dark hair",
                personality: "Brave and determined",
                motivations: "Seeking revenge for family",
                backstory: "Grew up in a small village",
                strengths: "Combat skills, leadership",
                weaknesses: "Impulsive, trusts too easily",
                relationships: "F1",
                key_moments: "ME1"
            }
        ],
        minorEvents: [
            {
                id: "ME1",
                name: "First Battle",
                category: "Combat",
                location: "L1",
                characters: "C1",
                description: "Hero's first major confrontation",
                purpose: "Establish character skills",
                timeline: "Day 1"
            }
        ],
        majorEvents: [
            {
                id: "MA1",
                name: "The Great War",
                arc: "Main Story Arc",
                description: "A conflict that shapes the world",
                cause_and_effect: "Political tensions led to war",
                consequences: "Changed power dynamics",
                timeline: "Year 1-3"
            }
        ],
        globalEvents: [
            {
                id: "G1",
                name: "The Cataclysm",
                type: "Natural Disaster",
                year_or_era: "Ancient Era",
                description: "A world-changing event",
                key_figures: "C1",
                impact: "Reshaped the continent",
                story_relevance: "Sets the stage for current conflicts"
            }
        ],
        locations: [
            {
                id: "L1",
                name: "Capital City",
                type: "Urban",
                power_level: "A-Rank",
                power_source: "LO1",
                description: "The heart of the kingdom",
                culture_politics: "Democratic governance, diverse population",
                important_people: "C1",
                events_here: "ME1",
                connections: ""
            }
        ],
        factions: [
            {
                id: "F1",
                name: "The Order",
                type: "Military Organization",
                power_level: "A-Rank",
                power_source: "LO1",
                description: "Elite warriors protecting the realm",
                leaders: "C1",
                values_goals: "Honor, justice, protection",
                allies: "",
                enemies: "",
                influence: "High in military matters"
            }
        ],
        items: [
            {
                id: "I1",
                name: "Ancient Sword",
                type: "Weapon",
                power_level: "A-Rank",
                power_source: "LO1",
                appearance: "Ornate blade with runes",
                powers_properties: "Enhances wielder's strength",
                history: "Forged in ancient times",
                owners: "C1",
                story_relevance: "Key to defeating the enemy"
            }
        ],
        lore: [
            {
                id: "LO1",
                topic: "Magic System",
                type: "World Mechanic",
                summary: "Magic flows from the earth itself",
                key_facts_rules: "Requires training, limited by stamina",
                origin: "Gift from ancient gods",
                plot_relevance: "Central to power struggles"
            }
        ],
        worldRules: [
            {
                id: "W1",
                name: "The Law of Balance",
                description: "Every action has an equal reaction",
                parameters: "Magic use creates void energy",
                examples: "Healing spell leaves residual harm",
                effect_on_story: "Limits power of magic users"
            }
        ],
        meta: {
            title: "My World",
            language: "en",
            theme: "fantasy"
        }
    };
}

// Utility to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
