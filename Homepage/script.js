// ==== ANIMATION DES YEUX ====
document.addEventListener("mousemove", (e) => {
  // On sélectionne TOUS les SVG (grand + mini logo)
  const svgs = document.querySelectorAll(".svg-container svg, .nav-logo svg");

  svgs.forEach((svg) => {
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const cursorpt = pt.matrixTransform(svg.getScreenCTM().inverse());

    // Récupère les deux yeux dans CHAQUE svg
    const eyes = [
      { el: svg.querySelector("#eye1"), cx: 715.82, cy: 675 },
      { el: svg.querySelector("#eye2"), cx: 1284.18, cy: 675 },
    ];

    eyes.forEach((eye) => {
      const dx = cursorpt.x - eye.cx;
      const dy = cursorpt.y - eye.cy;

      const angle = Math.atan2(dy, dx);

      // 🔥 Si le logo est dans la navbar => amplitude augmentée
      const isMiniLogo = svg.closest(".nav-logo") !== null;
      const distance = isMiniLogo
        ? Math.min(50, Math.hypot(dx, dy)) // mini logo => plus d'amplitude
        : Math.min(35, Math.hypot(dx, dy)); // grand logo => normal

      const offsetX = Math.cos(angle) * distance;
      const offsetY = Math.sin(angle) * distance;

      if (eye.el) {
        eye.el.setAttribute("transform", `translate(${offsetX}, ${offsetY})`);
      }
    });
  });
});

// ==== CARROUSEL ====
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 4000); // toutes les 4 secondes

// ==== FADE-OUT DU GRAND LOGO & AFFICHAGE MINI LOGO NAV ====
const mainLogo = document.querySelector(".svg-container");
const navLogo = document.querySelector(".nav-logo");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;

  if (scrollY > viewportHeight * 0.3) {
    mainLogo.style.opacity = 0; // fade-out logo central
    navLogo.classList.add("visible"); // fade-in mini logo
  } else {
    mainLogo.style.opacity = 1; // re-affiche logo central
    navLogo.classList.remove("visible"); // cache mini logo
  }
});

window.addEventListener("scroll", () => {
  const section = document.querySelector(".intro-section");
  const scrollY = window.scrollY;
  // change la couleur en fonction du scroll
  if (scrollY > 200) {
    section.style.color = "#fff";
  } else {
    section.style.color = "#201658";
  }
});


// ==== ANIMATION PETITE ÉTOILE DÉCORATIVE ====
document.addEventListener("DOMContentLoaded", () => {
  const star = document.querySelector(".star-draw");

  if (star) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          star.classList.add("animate");
          observer.unobserve(star);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(star);
  }
});