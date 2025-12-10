// Component schemas defining structure for each type
const schemas = {
    characters: {
        label: "Characters",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users mr-2 h-4 w-4" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>`,
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar mr-2 h-4 w-4" aria-hidden="true">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>`,
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star mr-2 h-4 w-4" aria-hidden="true">
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>`,
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe mr-2 h-4 w-4" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>`,
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin mr-2 h-4 w-4" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>`,
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flag mr-2 h-4 w-4" aria-hidden="true">
                  <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                </svg>`,
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gem mr-2 h-4 w-4" aria-hidden="true">
                  <path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path>
                  <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path>
                  <path d="M2 9h20"></path>
                </svg>`,
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open mr-2 h-4 w-4" aria-hidden="true">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>`,
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <!-- hole -->
                  <ellipse cx="12" cy="16" rx="6" ry="3"></ellipse>
                  <!-- horizontal grid lines -->
                  <path d="M4 12h16"></path>
                  <path d="M6 9h12"></path>
                  <!-- vertical grid lines -->
                  <path d="M12 4v8"></path>
                  <path d="M8 6v6"></path>
                  <path d="M16 6v6"></path>
                </svg>`,
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
