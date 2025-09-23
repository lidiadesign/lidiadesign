window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, 100 * i); // décalage progressif
    });
  });

  
  document.querySelector('.contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // empêche le rechargement
  
    const form = this;
    const data = new FormData(form);
  
    // Envoi à Formspree
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
  
    if (response.ok) {
      alert("✨ Merci pour votre message, je vous répondrai au plus vite !");
      form.reset();
    } else {
      alert("❌ Oups, une erreur est survenue. Réessayez plus tard.");
    }
  });