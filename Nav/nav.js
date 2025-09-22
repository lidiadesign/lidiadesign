// ==== ANIMATION DES YEUX ====
document.addEventListener("mousemove", (e) => {
    // On sélectionne TOUS les SVG (ici seulement celui de la nav)
    const svgs = document.querySelectorAll(".nav-logo-visible svg");
  
    svgs.forEach((svg) => {
      const pt = svg.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      const cursorpt = pt.matrixTransform(svg.getScreenCTM().inverse());
  
      // Récupère les deux yeux dans le logo
      const eyes = [
        { el: svg.querySelector("#eye1"), cx: 715.82, cy: 675 },
        { el: svg.querySelector("#eye2"), cx: 1284.18, cy: 675 },
      ];
  
      eyes.forEach((eye) => {
        const dx = cursorpt.x - eye.cx;
        const dy = cursorpt.y - eye.cy;
        const angle = Math.atan2(dy, dx);
  
        // Amplitude mini-logo
        const distance = Math.min(50, Math.hypot(dx, dy));
  
        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;
  
        if (eye.el) {
          eye.el.setAttribute("transform", `translate(${offsetX}, ${offsetY})`);
        }
      });
    });
  });