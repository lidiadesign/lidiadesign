// ✅ Animation "fade-in"
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100 * i); // petit décalage progressif
  });

  // ✅ Gestion du formulaire avec Formspree

  document.querySelector('.contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // empêche le rechargement

    const form = this;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert("✨ Merci pour votre message, je vous répondrai au plus vite !");
        form.reset(); // vide les champs
      }

      // ❌ Pas de else -> on ne montre rien si ça rate
    } catch (error) {
      // ❌ On ignore l’erreur silencieusement

      console.error("Erreur d’envoi :", error);
    }
  });});