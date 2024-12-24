document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".navbar-brand");
  const colors = ["red", "blue", "green", "orange", "purple"];
  let currentColorIndex = 0;

  setInterval(() => {
    title.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Cicla tra i colori
  }, 1000); // Cambia colore ogni 2 secondi
});
