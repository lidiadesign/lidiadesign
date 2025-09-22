// ✅ Ajoute la classe "visible" progressivement à tous les éléments .fade-in
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 100 * i); // décalage progressif (en ms)
    });
  });