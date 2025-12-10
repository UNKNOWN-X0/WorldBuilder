# 🌍 World Builder

A comprehensive web-based story and worldbuilding editor for writers, game masters, and creators. Organize characters, events, locations, factions, items, lore, and world rules with an intuitive interface and powerful linking system.

## ✨ Features

### 📚 Comprehensive Organization
- **Characters** - Track personalities, backstories, relationships, and power levels
- **Minor Events** - Document small plot points and scenes
- **Major Events** - Outline turning points and major plot beats
- **Global Events** - Record world-shaping historical events
- **Locations** - Map places, cultures, and connections
- **Factions** - Organize groups, alliances, and conflicts
- **Items** - Catalog weapons, artifacts, and equipment
- **Lore** - Document magic systems, myths, and world mechanics
- **World Rules** - Define laws governing your universe

### 🔗 Smart Linking System
- Link characters to factions, events, and locations
- Connect items to their owners and power sources
- Reference lore entries from anywhere
- Click any link to navigate instantly
- Build a connected web of story elements

### ⚡ Power Level Systems
- **Character Power Levels** - Rank character strength (S-Rank, Level 50, etc.)
- **Faction Levels** - Rate organizational influence and power
- **Item Tiers** - Classify equipment rarity and potency
- **Power Sources** - Link all power to lore explaining magic/abilities

### 🎨 28 Genre Themes
Choose from professionally designed themes:
- **General**: Light, Fantasy, Dark Fantasy, Adventure
- **Asian Fiction**: Xianxia, Wuxia, Cultivation
- **Sci-Fi**: Sci-Fi, Cyberpunk, Space Opera
- **Game**: LitRPG, Military
- **Dark**: Horror, Cosmic Horror, Thriller, Mystery, Noir
- **Romance**: Romance, Young Adult
- **Historical**: Historical, Steampunk, Western
- **Modern**: Urban Fantasy, Dystopian, Post-Apocalyptic, Supernatural
- **Other**: Magical Realism, Comedy

### 💾 Flexible Data Management
- **Import from Google Drive** - Load JSON via share links
- **Import from GitHub** - Load from raw URLs
- **Export to JSON** - Download your entire world
- **Copy to Clipboard** - Quick JSON access
- **Auto-save** - Changes saved to browser localStorage
- **Preview Mode** - View raw JSON in new tab

### 🌐 Multi-Language Support
- Write in any language (UTF-8 support)
- RTL/LTR text direction toggle
- Supports: English, Spanish, Japanese, Arabic, Chinese, Hindi, and 100+ languages

### 🎯 User-Friendly Interface
- Clean sidebar navigation
- Breadcrumb trail
- Search and filter
- Duplicate components
- Undo delete
- Keyboard shortcuts (Ctrl+S to save)
- Responsive mobile design
- Empty states with guidance

## 🚀 Getting Started

### Quick Start (Local Use)

1. **Download all files** to a folder:
   ```
   world-builder/
   ├── index.html
   ├── styles.css
   ├── data.js
   ├── schemas.js
   ├── themes.js
   ├── components.js
   ├── storage.js
   ├── ui.js
   └── app.js
   ```

2. **Open `index.html`** in your web browser

3. **Start building!** The app works entirely in your browser - no server needed.

### Hosting on GitHub Pages

1. **Create a new GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/world-builder.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "main" branch as source
   - Click Save

3. **Access your site**
   - Your site will be live at: `https://yourusername.github.io/world-builder/`

## 📖 Usage Guide

### Creating Your First Character

1. Click **"Characters"** in the sidebar
2. Click **"+ Add New"** button
3. Fill in the fields:
   - **ID**: Unique identifier (e.g., "C1")
   - **Name**: Character name
   - **Power Level**: "S-Rank", "Level 50", etc.
   - **Power Source**: Link to lore IDs (e.g., "LO1")
4. Fill in personality, backstory, relationships
5. Changes auto-save!

### Linking Components

**Link by ID:**
```
Character relationships: "C2, C3, F1"
- C2, C3 = other character IDs
- F1 = faction ID
```

**Clickable Tags:**
- Links automatically become clickable tags
- Click to navigate to that component
- See names instead of just IDs

### Creating a Power System

1. **Create a Lore entry** explaining your magic system:
   ```
   ID: LO1
   Topic: Dragon Blood System
   Type: Power System
   Summary: Dragons grant power through bloodline
   Key Rules: Stronger bloodline = more power
   ```

2. **Link characters to it:**
   ```
   Character: Kai
   Power Level: S-Rank
   Power Source: LO1
   ```

3. **Link factions and items too:**
   ```
   Faction: Dragon Clan
   Faction Level: Major Power
   Power Source: LO1
   
   Item: Dragon Fang Sword
   Item Level: Legendary
   Power Source: LO1
   ```

### Importing & Exporting

**From Google Drive:**
1. Upload your JSON to Google Drive
2. Right-click → Get shareable link
3. Click **"📂 Import"** in World Builder
4. Paste the share link
5. Click "Load from Link"

**From GitHub:**
1. Push your JSON to a public repo
2. Open the file on GitHub
3. Click "Raw" button
4. Copy the URL
5. Paste into World Builder's import

**Export:**
- Click **"💾 Export JSON"** to download
- Click **"📋 Copy JSON"** to copy to clipboard
- Click **"👁️ Preview JSON"** to view in new tab

## ⌨️ Keyboard Shortcuts

- **Ctrl/Cmd + S** - Download JSON (save)
- **Escape** - Close modals
- **Click component header** - Expand/collapse

## 🎨 Customization

### Changing Themes

**In Sidebar:**
1. Select theme from dropdown
2. Changes apply instantly

**In Settings:**
1. Click **⚙️ Settings** button
2. Browse all 28 themes
3. Click any theme to apply

### Text Direction (RTL/LTR)

For Arabic, Hebrew, and other RTL languages:
1. Go to **Settings**
2. Change "Text Direction" to RTL
3. Layout flips for better readability

## 📁 File Structure

```
world-builder/
├── index.html          # Main HTML structure
├── styles.css          # All styling and themes
├── data.js             # Data model and utilities
├── schemas.js          # Component field definitions
├── themes.js           # 28 theme definitions
├── components.js       # CRUD operations
├── storage.js          # Import/export functionality
├── ui.js               # UI rendering
└── app.js              # Application initialization
```

## 🔧 Technical Details

### Technology Stack
- **HTML5** - Structure
- **CSS3** - Styling with CSS variables
- **Vanilla JavaScript** - No frameworks or dependencies
- **LocalStorage API** - Auto-save functionality
- **Fetch API** - Load from external sources

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Data Format

JSON structure:
```json
{
  "characters": [...],
  "minorEvents": [...],
  "majorEvents": [...],
  "globalEvents": [...],
  "locations": [...],
  "factions": [...],
  "items": [...],
  "lore": [...],
  "worldRules": [...],
  "meta": {
    "title": "My World",
    "author": "Author Name",
    "language": "en",
    "theme": "fantasy"
  }
}
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📝 License

This project is licensed under the MIT License - see below:

```
MIT License

Copyright (c) 2024 World Builder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🆘 Troubleshooting

### JSON won't load from Google Drive
- Ensure file is set to "Anyone with link can view"
- Try using the direct share link, not the preview link
- If it still fails, copy/paste JSON directly

### JSON won't load from GitHub
- Ensure repository is public
- Use the raw URL (click "Raw" button)
- Private repos require authentication and won't work

### Data disappeared
- Check browser localStorage (dev tools → Application → Local Storage)
- Make sure you didn't clear browser data
- Always export JSON regularly as backup

### Theme not applying
- Try refreshing the page
- Check if JavaScript is enabled
- Clear browser cache

### Mobile display issues
- Use landscape orientation for better experience
- Some features work best on desktop
- Sidebar can be toggled with ☰ button

## 🎯 Use Cases

Perfect for:
- **Novel Writers** - Track complex storylines
- **Game Masters** - Organize D&D/RPG campaigns
- **Screenwriters** - Manage characters and plot
- **Game Developers** - Design game worlds
- **Worldbuilders** - Create consistent universes
- **Fan Fiction** - Expand existing worlds
- **Comic Creators** - Plan story arcs
- **Content Creators** - Develop lore for content

## 🌟 Tips for Success

1. **Start with Lore** - Define your magic/power systems first
2. **Use Consistent IDs** - Keep ID prefixes logical (C1, C2 for characters)
3. **Link Everything** - Build relationships between components
4. **Export Regularly** - Back up your work to JSON
5. **Use Power Levels** - Create clear hierarchies
6. **Choose the Right Theme** - Match your genre
7. **Search Often** - Use search to find components quickly
8. **Duplicate, Don't Rebuild** - Copy similar components

## 📮 Support

- **Issues**: Report on GitHub Issues
- **Questions**: Check this README first
- **Updates**: Watch the repository for new features

---

**Happy Worldbuilding!** 🌍✨

*For questions, feedback, or contributions, please open an issue on GitHub.*
