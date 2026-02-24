document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const generateBtn = document.getElementById('generate-btn');
  const lottoContainer = document.getElementById('lotto-container');
  const balls = document.querySelectorAll('.ball');
  const body = document.body;

  // Theme preference persistence
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = 'Toggle Light Mode';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    let theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    themeToggle.textContent = theme === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    localStorage.setItem('theme', theme);
  });

  // Lotto number generation logic
  function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  generateBtn.addEventListener('click', () => {
    const newNumbers = generateLottoNumbers();

    balls.forEach((ball, index) => {
      // Small delay for each ball to animate sequentially
      setTimeout(() => {
        ball.textContent = newNumbers[index];
        ball.classList.remove('animate');
        // Trigger reflow for re-running animation
        void ball.offsetWidth;
        ball.classList.add('animate');
      }, index * 100);
    });
  });
});
