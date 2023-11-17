const catalogoContent = document.getElementById("catalogo__content");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalClose = document.getElementById("modal-close");
const juego = document.getElementById("juego");

function openModal(data) {
    modalImage.src = data.url;
    modal.style.display = "block";
    juego.placeholder = data.nombre;
    juego.disabled = true;
}

function closeModal() {
    modal.style.display = "none";
}

games.forEach(function (game) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card__ph");
    img.setAttribute("src", game.url);

    const p = document.createElement("p");
    p.classList.add("card__descripcion");
    p.textContent = game.descripcion;

    const button = document.createElement("button");
    button.classList.add("card__button");
    button.textContent = "Consultar";
  
  
    button.addEventListener("click", function () {
        openModal(game);
    });
    juego.placeholder = game.nombre;
    juego.disabled = true;
    card.appendChild(img);
    card.appendChild(p);
    card.appendChild(button);

    catalogoContent.appendChild(card);
});

modalClose.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});