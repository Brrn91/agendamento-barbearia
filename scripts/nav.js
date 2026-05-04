const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    menuToggle.setAttribute('aria-expanded', !isOpen);
    const icon = menuToggle.querySelector('i');
    icon?.classList.toggle('bi-list');
    icon?.classList.toggle('bi-x-lg');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        menu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
        const icon = menuToggle.querySelector('i');
        icon?.classList.add('bi-list');
        icon?.classList.remove('bi-x-lg');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target) && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
      const icon = menuToggle.querySelector('i');
      icon?.classList.add('bi-list');
      icon?.classList.remove('bi-x-lg');
    }
  });
}
