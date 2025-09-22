// footer.js — injection + fade-in fiable
(function () {
  const mount = document.getElementById('footer-placeholder');
  if (!mount) return;

  fetch('../Footer/footer.html')
    .then(r => r.text())
    .then(html => {
      mount.innerHTML = html;

      // Attache le CSS une seule fois dans <head> (si besoin)
      if (!document.querySelector('link[data-footer-css]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../Footer/footer.css';
        link.setAttribute('data-footer-css', '1');
        document.head.appendChild(link);
      }

      initFooter(); // ⬅️ lance l’animation maintenant
    })
    .catch(console.error);

  function initFooter() {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;

    const reveal = () => footer.classList.add('visible');

    // Si l'API est là, on fade-in quand il entre dans le viewport
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal();
            obs.disconnect();
          }
        });
      }, { threshold: 0.15 });

      obs.observe(footer);

      // Si déjà visible au chargement, révèle tout de suite
      const r = footer.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom >= 0) {
        requestAnimationFrame(reveal);
      }
    } else {
      // Fallback vieux navigateurs : montre direct
      reveal();
    }
  }
})();
