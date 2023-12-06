let title = document.getElementById("hero__title");
let castle = document.getElementById("castle");
let moon = document.getElementById("moon");
let hill1 = document.getElementById("hill1");
let hill2 = document.getElementById("hill2");
let hill3 = document.getElementById("hill3");
let nube1 = document.getElementById("nube1");
let nube2 = document.getElementById("nube2");
let game1 = document.getElementById("game1");
let hero = document.getElementById("hero");
let birds = document.getElementById("birds");
let header = document.getElementById("header");
let card = document.getElementsByClassName("card");
let nosotrosPH = document.getElementsByClassName("nosotros__ph");

$(document).ready(function () {
  if ($(window).width() > 900 ) {
  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    title.style.marginTop = value * 0.4 + "vw";
    moon.style.top = value * -0.2 + "vw";
    castle.style.margintop = value * -0.5 + "vw";
    hill1.style.left = value * -1.5 + "vw";
    hill2.style.right = value * -0.5 + "vw";
    nube1.style.left = value * 0.5 + "vw";
    nube2.style.left = value * -1.5 + "vw";
    birds.style.transform = "translateY(0) scale(" + 1 + value / 5 + ")";
    birds.style.top = 1 + value + 16 + "vw";
    birds.style.width = 25 + value + 2 + "vw";
    hero.style.background =
      "linear-gradient(" +
      value / 10 +
      "deg, rgba(36, 36, 40, 1) 11%, rgba(" +
      value / 1 +
      "," +
      value / 1 +
      "," +
      value / 2 +
      ") 44%, rgba(23, 24, 34, 1) 87%, rgba(23,24,34,1)" +
      value * 3 +
      "%)";
    // body.style.background = "linear-gradient(163deg,rgba(0,"+ value * 3 + ", 255,1) -50%, rgba(255,255,255,1) 27%, rgba(255,255,255,1) 72%, rgba(255,255,0,1) 180%)";

    $(window).scroll(function () {
      if ($(window).width() > 900 && $(this).scrollTop() > 10) {
        $(game1).addClass("scale");
        game1.style.position = "fixed";
        hill3.style.top = -8 + "vw";
        $(header).addClass("shadow");

        // game1.style.top = value *  0.2 + 'vw';
      } else {
        $(header).removeClass("shadow");
        $(game1).removeClass("scale");
        hill3.style.top = -1 + "vw";
      }

      if ($(window).width() > 900 && $(this).scrollTop() > 410) {
        game1.style.position = "absolute";
        game1.style.top = 50.5 + "vw";
        game1.style.left = 53 + "vw";
        value = 0;
        title.style.marginTop = 0;
        moon.style.top = 0;
        castle.style.margintop = 0;
        hill1.style.left = 0;
        hill2.style.right = 0;
        nube1.style.left = 0;
        nube2.style.left = 0;
        birds.style.transform = "scale(" + 1 + ")";
        birds.style.top = 0;
        birds.style.width = 25 + "vw";

        // game1.style.top = value *  0.2 + 'vw';
      } else {
        game1.style.position = "fixed";
        game1.style.top = 10 + "vw";
        game1.style.left = 42 + "vw";
      }
      if ($(window).width() > 900 && $(this).scrollTop() > 410) {
        game1.style.display = "none";
        $(".card:nth-child(3)").css("opacity", "1");
      } else {
        game1.style.display = "block";
        $(".card:nth-child(3)").css("opacity", "0");
      }

      if ($(window).width() > 900 && $(this).scrollTop() > 2110) {
        $(".nosotros__ph").css("left", "-4vw");
      } else {
        $(".nosotros__ph").css("left", "-54vw");
      }
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      title.style.animation = "none";
      void title.offsetWidth; // Reiniciar animación
      title.style.animation = null;
    }
  });
  const titleAnimado = document.querySelectorAll(".title-animado");

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      titleAnimado.forEach((elemento) => {
        elemento.style.animation = "none";
        void elemento.offsetWidth; // Reiniciar animación
        elemento.style.animation = "letter-animation 2s 3.4s linear forwards"; // Nombre de la animación y duración
      });
    }
  });
}
});

// Obtener todos los enlaces de navegación
const navLinks = document.querySelectorAll(".nav-link");

// Agregar un evento de clic a cada enlace
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Eliminar la clase "active" de todos los enlaces
    navLinks.forEach((link) => link.classList.remove("active"));
    console.log("holaaa");

    // Agregar la clase "active" solo al enlace clickeado
    this.classList.add("active");
  });
});
