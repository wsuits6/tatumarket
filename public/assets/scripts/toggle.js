// toggle.js

// Select the <link> element that loads either the light or dark theme
const themeLink = document.querySelector('link[href*="light.css"], link[href*="dark.css"]');

// Function to toggle between light and dark themes
function toggleTheme() {
    if (!themeLink) return;

    // Get the current theme based on the href
    const currentTheme = themeLink.getAttribute('href');

    // Determine the new theme
    let newTheme;
    if (currentTheme.includes('light.css')) {
        newTheme = 'dark';
    } else {
        newTheme = 'light';
    }

    // Apply the new theme
    themeLink.setAttribute('href', `../assets/styles/${newTheme}.css`);

    // Save the user preference to localStorage
    localStorage.setItem('theme', newTheme);

    // Update the toggle button icon accordingly
    updateToggleIcon(newTheme);
}

// Function to update the toggle button icon (moon/sun) dynamically
function updateToggleIcon(theme) {
    const btnIcon = document.querySelector('#themeToggleBtn i');
    if (!btnIcon) return;

    if (theme === 'dark') {
        btnIcon.classList.remove('fa-moon');
        btnIcon.classList.add('fa-sun');
    } else {
        btnIcon.classList.remove('fa-sun');
        btnIcon.classList.add('fa-moon');
    }
}

// Load theme on page load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Check if the user previously selected a theme
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme && themeLink) {
        // Apply saved theme
        themeLink.setAttribute('href', `../assets/styles/${savedTheme}.css`);
        updateToggleIcon(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // 2. If no saved theme, check browser/OS preference for dark mode
        themeLink.setAttribute('href', '../assets/styles/dark.css');
        updateToggleIcon('dark');
    } else {
        // 3. Default to light theme if nothing else matches
        themeLink.setAttribute('href', '../assets/styles/light.css');
        updateToggleIcon('light');
    }
});

// Optional: listen for changes in OS/browser theme while user is on page
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        // Only update if user has not manually selected a theme
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            themeLink.setAttribute('href', `../assets/styles/${newTheme}.css`);
            updateToggleIcon(newTheme);
        }
    });
}
