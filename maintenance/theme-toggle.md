# Theme Toggle Documentation

## Overview
The theme toggle feature allows users to switch between light and dark modes in comp.html. The dark mode is set as default and persists across page reloads using localStorage.

## Implementation Details

### Location
- Theme toggle implemented in `comp.html`
- Dark theme is set as default theme

### How it Works
1. Theme state is stored in `data-theme` attribute on the HTML element
2. Theme preference is persisted in localStorage
3. Toggle button in the top navigation switches between themes
4. CSS variables control theming of all components

### CSS Variables
```css
/* Light theme (default) */
:root {
    --text-primary: #1F2937;
    --text-secondary: #4B5563;
    --bg-primary: #F3F4F6;
    --bg-secondary: #FFFFFF;
    --bg-tertiary: #E5E7EB;
}

/* Dark theme */
[data-theme="dark"] {
    --text-primary: #F9FAFB;
    --text-secondary: #D1D5DB;
    --bg-primary: #111827;
    --bg-secondary: #1F2937;
    --bg-tertiary: #374151;
}
```

### JavaScript Functions
```javascript
// Toggle between light and dark themes
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    updateThemeIcon(isDark ? 'light' : 'dark');
}

// Initialize theme on page load
function initTheme() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}
```

## Maintenance Notes
- Dark theme is set as default
- Theme preference persists across page reloads
- All colors are managed through CSS variables
- Components use variable references instead of hard-coded colors