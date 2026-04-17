import './style.scss';
import './components.scss';

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.header__toggle');
  const header = document.querySelector('.header');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.drawer a');

  if (!toggle || !header) return;

  toggle.addEventListener('click', () => {
    header.classList.toggle('is-open');
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      header.classList.remove('.is-open');
    });
  }
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('is-open');
    });
  });
});
