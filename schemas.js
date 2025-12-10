// Component schemas defining structure for each type
const schemas = {
    characters: {
        label: "Characters",
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                 fill="none" stroke="currentColor" stroke-width="2" 
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <circle cx="9" cy="7" r="4"/>
            </svg>
        `.trim(),
        fields: {
            id: { type: "text", label: "ID", required: true },
            name: { type: "text", label: "Name", required: true },
            role: { type: "text", label: "Role" },
            age: { type: "text", label: "Age" },
            power_level: { type: "text", label: "Power Level" },
            power_source: { type: "links", label: "Power Source (Lore IDs)", targets: ["lore"] },
            appearance: { type: "textarea", label: "Appearance" },
            personality: { type: "textarea", label: "Personality" },
            motivations: { type: "textarea", label: "Motivations" },
            backstory: { type: "textarea", label: "Backstory" },
            strengths: { type: "textarea", label: "Strengths" },
            weaknesses: { type: "textarea", label: "Weaknesses" },
            relationships: { type: "links", label: "Relationships (IDs)", targets: ["characters", "factions"] },
            key_moments: { type: "links", label: "Key Moments (IDs)", targets: ["minorEvents", "majorEvents"] }
        }
    },
    minorEvents: {
        label: "Minor Events",
        icon: "📌",
        fields: {
            id: { type: "text", label: "ID", required: true },
            name: { type: "text", label: "Name", required: true },
            category: { type: "text", label: "Category" },
            location: { type: "link", label: "Location (ID)", targets: ["locations"] },
            characters: { type: "links", label: "Characters (IDs)", targets: ["characters"] },
            description: { type: "textarea", label: "Description" },
            purpose: { type: "textarea", label: "Purpose" },
            timeline: { type: "text", label: "Timeline" }
        }
    },
    majorEvents: {
        label: "Major Events",
        icon: "⚡",
        fields: {
            id: { type: "text", label: "ID", required: true },
            name: { type: "text", label: "Name", required: true },
            arc: { type: "text", label: "Arc" },
            description: { type: "textarea", label: "Description" },
            cause_and_effect: { type: "textarea", label: "Cause and Effect" },
            consequences: { type: "textarea", label: "Consequences" },
            timeline: { type: "text", label: "Timeline" }
        }
    },
    globalEvents: {
        label: "Global Events",
        icon: "🌐",
        fields: {
            id: { type: "text", label: "ID", required: true },
            name: { type: "text", label: "Name", required: true },
            type: { type: "text", label: "Type" },
            year_or_era: { type: "text", label: "Year/Era" },
            description: { type: "textarea", label: "Description" },
            key_figures: { type: "links", label: "Key Figures (IDs)", targets: ["characters"] },
            impact: { type: "textarea", label: "Impact" },
            story_relevance: { type: "textarea", label: "Story Relevance" }
        }
    },
    locations: {
        label: "Locations",
        icon: "🗺️",
        fields: {
            id: { type: "text", label: "ID", required: true },
            name: { type: "text", label: "Name", required: true },
            type: { type: "text", label: "Type" },
            description: { type: "textarea", label: "Description" },
            culture_politics: { type: "textarea", label: "Culture & Politics" },
            important_people: { type: "links", label: "Important People (IDs)", targets: ["characters"] },
            events_here: { type: "links", label: "Events Here (IDs)", targets: ["minorEvents", "majorEvents", "globalEvents"] },
            connections: { type: "links", label: "Connected Locations (IDs)", targets: ["locations"] }
        }
    },
    factions: {
        label: "Factions",
        icon: "⚔️",
        fields: {
            id: { type: "text", label: "ID", required: true },
            name: { type: "text", label: "Name", required: true },
            type: { type: "text", label: "Type" },
            faction_level: { type: "text", label: "Faction Level" },
            power_source: { type: "links", label: "Power Source (Lore IDs)", targets: ["lore"] },
            description: { type: "textarea", label: "Description" },
            leaders: { type: "links", label: "Leaders (IDs)", targets: ["characters"] },
            values_goals: { type: "textarea", label: "Values & Goals" },
            allies: { type: "links", label: "Allies (IDs)", targets: ["factions"] },
            enemies: { type: "links", label: "Enemies (IDs)", targets: ["factions"] },
            influence: { type: "textarea", label: "Influence" }
        }
    },
    items: {
        label: "Items",
        icon: "🗡️",
        fields: {
            id: { type: "text", label: "ID", required: true },
            name: { type: "text", label: "Name", required: true },
            type: { type: "text", label: "Type" },
            item_level: { type: "text", label: "Item Level" },
            power_source: { type: "links", label: "Power Source (Lore IDs)", targets: ["lore"] },
            appearance: { type: "textarea", label: "Appearance" },
            powers_properties: { type: "textarea", label: "Powers/Properties" },
            history: { type: "textarea", label: "History" },
            owners: { type: "links", label: "Owners (IDs)", targets: ["characters"] },
            story_relevance: { type: "textarea", label: "Story Relevance" }
        }
    },
    lore: {
        label: "Lore",
        icon: "📜",
        fields: {
            id: { type: "text", label: "ID", required: true },
            topic: { type: "text", label: "Topic", required: true },
            type: { type: "text", label: "Type" },
            summary: { type: "textarea", label: "Summary" },
            key_facts_rules: { type: "textarea", label: "Key Facts/Rules" },
            origin: { type: "textarea", label: "Origin" },
            plot_relevance: { type: "textarea", label: "Plot Relevance" }
        }
    },
    worldRules: {
        label: "World Rules",
        icon: "⚖️",
        fields: {
            id: { type: "text", label: "ID", required: true },
            name: { type: "text", label: "Name", required: true },
            description: { type: "textarea", label: "Description" },
            parameters: { type: "textarea", label: "Parameters" },
            examples: { type: "textarea", label: "Examples" },
            effect_on_story: { type: "textarea", label: "Effect on Story" }
        }
    }
};
