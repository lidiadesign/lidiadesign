// Animation fade-in à l’arrivée de la page
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 100 * i); // décalage progressif
    });
  });