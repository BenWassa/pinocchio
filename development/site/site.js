// Navigation active link highlighting and theme toggle
(function () {
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  const stored = localStorage.getItem('theme');
  if (stored) document.documentElement.setAttribute('data-theme', stored);

  const toggle = document.querySelector('.theme-toggle');
  toggle && toggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const next = theme === 'sepia' ? 'celestial' : theme === 'celestial' ? '' : 'sepia';
    if (next) {
      document.documentElement.setAttribute('data-theme', next);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', next);
  });
})();
