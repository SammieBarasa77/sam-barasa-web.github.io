
// Select all the theme buttons
const themeButtons = document.querySelectorAll('.theme-btn');
const themeLink = document.getElementById('theme-link');

// Set up event listeners for each button
themeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const selectedTheme = this.getAttribute('data-theme');
    switchTheme(selectedTheme);
  });
});

// Function to switch the theme
function switchTheme(theme) {
  // Update the stylesheet link based on selected theme
  if (theme === 'light') {
    themeLink.href = 'light-theme.css';
  } else if (theme === 'dark') {
    themeLink.href = 'dark-theme.css';
  } else if (theme === 'colorful') {
    themeLink.href = 'colorful-theme.css';
  }
}
