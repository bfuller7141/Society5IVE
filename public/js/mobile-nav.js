document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu      = document.querySelector('.menu');

  if (!hamburger || !menu) {
    return;
  }

  // Toggle mobile menu open/close
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    const willExpand = !expanded;

    hamburger.setAttribute('aria-expanded', willExpand.toString());
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

    // Prevent background scroll when menu is open
    document.body.classList.toggle('no-scroll', willExpand);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    const target = event.target;
    const clickedInsideNav = target instanceof Element
      && (target.closest('.nav-mobile') || target.closest('.menu'));

    if (!clickedInsideNav) {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    }
  });
});
