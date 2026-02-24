document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check for saved theme preference in localStorage
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = 'Toggle Light Mode';
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
      theme = 'dark';
      themeToggle.textContent = 'Toggle Light Mode';
    } else {
      themeToggle.textContent = 'Toggle Dark Mode';
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  });
});
