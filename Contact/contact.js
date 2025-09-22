window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 100 * i); // décalage progressif
    });
  });

  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // empêche le rechargement de la page
    alert("✨ Merci pour votre message, je vous répondrai au plus vite !");
    this.reset(); // réinitialise les champs
  });