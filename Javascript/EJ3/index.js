const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

let number = document.querySelector("#number");
const buttonBuscar = document.querySelector("#buscar")
const container = document.querySelector(".container");
console.log(number.value);

    const buscarPizza = () =>{
      const pizzaId = parseInt(number.value);
      const pizza = pizzas.find((pizza) => pizza.id === pizzaId);

      if (!isNaN(pizzaId)) {
        if (pizza) {
            const card = createPizzaCard(pizza);
            renderResult(card);
        } else {
            renderError("Pizza no encontrada.");
        }
    } else {
        renderError("Ingresa un número válido.");
    }
    }
    
    function createPizzaCard(pizza) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
          <h2>${pizza.nombre}</h2>
          <img src="${pizza.imagen}" alt="${pizza.nombre}">
          <p>Precio: $${pizza.precio}</p>
      `;
      return card;
  }
  
  function renderResult(content) {
    container.innerHTML = "";
    container.appendChild(content);
  }
  
  function renderError(message) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error";
      errorDiv.textContent = message;
      container.innerHTML = "";
      container.appendChild(errorDiv);
  }

    const init = () => {
      buttonBuscar.addEventListener('click', buscarPizza)
    }

    init();