const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/*
Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

a)  Las pizzas que tengan un id impar.
b) Responder: ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

*/

//A) Las pizzas que tengan un id impar.
const pizzasConIdImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);
pizzasConIdImpar.forEach(pizza => {
  console.log(`ID impar: ${pizza.id}- Nombre: ${pizza.nombre}`);
});

// B) ¿Hay alguna pizza que valga menos de $600?
const pizzasvalor = pizzas.some(pizza => pizza.precio < 600);

if (pizzasvalor) {
  console.log("Sí, hay al menos una pizza que vale menos de $600.");
} else {
  console.log("No, todas las pizzas tienen un precio igual o superior a $600.");
}
//C) El nombre de cada pizza con su respectivo precio.
pizzas.forEach(pizza => {
  console.log(`La ${pizza.nombre} tiene un valor de $${pizza.precio} `);
});

//D) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). 
//Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

pizzas.forEach(pizza => {
  console.log(`La ${pizza.nombre} tiene estos ingredientes:`);
  pizza.ingredientes.forEach(ingrediente => {
    console.log(`* ${ingrediente} `);

  });
});