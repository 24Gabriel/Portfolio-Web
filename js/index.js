let previousTitle = document.title;
window.addEventListener("blur", () => {
  previousTitle = document.title;
  document.title = "¡No te vallas! ¡Contratame Primero!";
});
window.addEventListener("focus", () => {
  document.title = previousTitle;
});

var typed = new Typed(".typing", {
  strings: ["", "Desarrollador Web Full Stack"],
  typeSpeed: 100,
  BackSpeed: 80,
  loop: true,
});
/*----------------- Prueba--------------*/
