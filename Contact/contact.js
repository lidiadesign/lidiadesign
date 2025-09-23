// ✅ Animation "fade-in"
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100 * i); // petit décalage progressif
  });

  // ✅ Gestion du formulaire avec Formspree
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // empêche le rechargement classique

      const data = new FormData(form);

      try {
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
      } catch (error) {
        alert("⚠️ Impossible d’envoyer le message (connexion perdue ?)");
      }
    });
  }
});
