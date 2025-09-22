console.log("JS chargé ✅");

const projets = document.querySelectorAll(".projet-item");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-desc");
const closeBtn = document.querySelector(".close-btn");
const leftArrow = document.querySelector(".popup-arrow-left");
const rightArrow = document.querySelector(".popup-arrow-right");

let currentIndex = 0;
let currentImages = [];


// Animation fade-in à l’arrivée de la page
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100 * i); // décalage progressif
  });
});




// Juste les images ! Les titres sont déjà dans le HTML
const projetsData = [
  { 
    img: "Setdetable.png",
    desc: "J'ai pu, en collaborant avec la direction, créer une illustration représentant l'âme et la convivialité du Café Hugo. Ces sets sont très appréciés par les habitués comme les touristes."
  },

  { img: "Babouchka.png",
    desc: "Voici une de mes peintures numériques d’une jeune femme au foulard, réalisée sur Procreate. Un projet personnel tout en douceur, qui me rappelle ma double nationalité."
     },

  { 
    img: "sitesite.png",
  desc: "Ce site web est un projet personnel de A à Z : design, direction artistique et développement. Un espace vivant et en constante évolution pour regrouper mes créations, qui évolue en même temps que moi."
  },

  { imgs: [
      "Chiotacrylique.png",
      "smithsacrylique.png",
      "poneyacrylique.png",
      "perleacrylique.png",
      "visageacrylique.png",
      "chatespace.png"
    ],
    desc: "Exploration de visages, paysages, animaux et tout autre sujet à travers des portraits semi-réalistes réalisés aux feutres acryliques. Une façon d’exercer ma créativité de manière spontanée et colorée."
  },

  { 
    img: "LogoCafeHugo.png",
    desc: "J’ai conçu un logo sobre et élégant représentant les emblématiques arches du lieu, afin d'accompagner la nouvelle identité visuelle du Café Hugo. Il sera utilisé sur les supports du restaurant et en ligne."
  },

  { imgs: [
      "Vinyle4.png",
      "AfficheSierra.png",
      "vinyle1.png",
      "Vinyle2.png",
      "Vinyle3.png",
      "Affichehellfest.png"
    ],
    desc: "Travaux issus de 6 mois d’immersion en école de design : affiches Hellfest, vinyles illustrés, animation After Effects… Un large éventail de pratiques créatives."
  },

];

// Clique sur chaque projet
projets.forEach((projet, index) => {
  projet.addEventListener("click", () => {
    const data = projetsData[index];

    // Utilise les titres déjà présents dans ta grille HTML
    const titre = projet.querySelector("h3")?.textContent || "";
    popupTitle.textContent = titre;
    popupDesc.textContent = data.desc || "";
    if (data.img) {
      currentImages = [data.img];
      currentIndex = 0;
      updatePopupImage();
      toggleArrows(false);
    } else if (data.imgs && Array.isArray(data.imgs)) {
      currentImages = data.imgs;
      currentIndex = 0;
      updatePopupImage();
      toggleArrows(true);
    }

    popup.classList.add("open");
  });
});

// Met à jour l'image affichée dans le popup
function updatePopupImage() {
  popupImg.innerHTML = `<img src="${currentImages[currentIndex]}" alt="image projet">`;
}

// Navigation flèches
leftArrow?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updatePopupImage();
});

rightArrow?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updatePopupImage();
});

function toggleArrows(show) {
  leftArrow.style.display = show ? "inline-block" : "none";
  rightArrow.style.display = show ? "inline-block" : "none";
}

// Fermer la pop-up
closeBtn.addEventListener("click", () => popup.classList.remove("open"));
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.remove("open");
});
