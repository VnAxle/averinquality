(function () {
    const section = document.getElementById("experience");
    if (!section) return;
  
    const MAX_SHIFT = 500;         // increase = stronger parallax
    const SPEED_MULTIPLIER = 1.4;  // increase = faster movement
  
    function onScroll() {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
  
      const progress = Math.min(
        Math.max((vh - rect.top) / (vh + rect.height), 0),
        1
      );
  
      const offsetY = -MAX_SHIFT * progress * SPEED_MULTIPLIER;
      section.style.backgroundPosition = `center ${offsetY}px`;
    }
  
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll();
  })();
  