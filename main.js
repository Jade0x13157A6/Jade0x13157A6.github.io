(() => {
  const root = document.documentElement;
  const themeBtn = document.querySelector('[data-theme-toggle]');
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-nav-links]');
  const savedTheme = localStorage.getItem('rl-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') root.dataset.theme = savedTheme;
  function syncTheme() {
    if (!themeBtn) return;
    const isDark = root.dataset.theme === 'dark';
    themeBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeBtn.setAttribute('title', isDark ? 'Light theme' : 'Dark theme');
    themeBtn.textContent = isDark ? '☀' : '◐';
  }
  syncTheme();
  themeBtn?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('rl-theme', root.dataset.theme);
    syncTheme();
  });
  menuBtn?.addEventListener('click', () => {
    const open = menu?.dataset.open !== 'true';
    if (menu) menu.dataset.open = String(open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuBtn.textContent = open ? '✕' : '☰';
  });
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.dataset.open = 'false';
    menuBtn?.setAttribute('aria-expanded', 'false');
    if (menuBtn) menuBtn.textContent = '☰';
  }));
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
