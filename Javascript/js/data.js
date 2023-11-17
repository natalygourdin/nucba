let games = [
  { id:1 , nombre: "GoodFall", url: "./img/games/3.png", precio: 50000, categoria: "aventura"  },
  { id:2 , nombre: "Fifa 23", url: "./img/games/2.png" , precio: 55000 , categoria: "deportes"},
  { id:3 , nombre: "Hogwarts Legacy", url: "./img/games/new.png" , precio:70000, categoria: "aventura" },
  { id:4 , nombre: "Spider-man Miles Morales", url: "./img/games/4.png" , precio: 60000, categoria: "aventura" },
  { id:5 , nombre: "Horizon west", url: "./img/games/5.png" , precio: 50000, categoria: "aventura" },
  { id:6 , nombre: "Call of Duty - Vanguard", url: "./img/games/6.png" , precio: 55000, categoria: "aventura" },
  { id:7 , nombre: "Inmortals Fenix Rising", url: "./img/games/7.png" , precio: 53000, categoria: "aventura" },
  { id:8 , nombre: "Korf Xy", url: "./img/games/8.png" , precio: 40000, categoria: "infantil" },
  { id:9 , nombre: "Scarlet Nexus", url: "./img/games/9.png" , precio: 46000, categoria: "aventura" },
  { id:10 , nombre: "God Of war", url: "./img/games/10.png" , precio: 60000, categoria: "aventura" },
  { id:11 , nombre: "Village", url: "./img/games/11.png" , precio: 40000, categoria: "terror" },
  { id:12 , nombre: "Enchanted Portals", url: "./img/games/12.png" , precio: 50000, categoria: "infantil" },
  { id:13 , nombre: "Battlefield 2042", url: "./img/games/14.png" , precio: 40000, categoria: "aventura" },
  { id:14 , nombre: "30 Sport Games", url: "./img/games/13.png" , precio: 40000, categoria: "deportes" },
  { id:15 , nombre: "Demon's Souls", url: "./img/games/15.png" , precio: 50000 , categoria: "terror"},
  { id:16 , nombre: "Rachet Clank", url: "./img/games/16.png" , precio: 55000, categoria: "aventura" },
  { id:17 , nombre: "Gran Turismo", url: "./img/games/17.png" , precio: 60000, categoria: "deportes" },
];

// dividir array
const divideProducts = (size) => {
   let gamesList = [];
      for (let i = 0; i < games.length; i+= size) {
        gamesList.push(games.slice(i, i + size));
      }
   return gamesList;
}

// appstate
const appState = {
  products: divideProducts(10),
  currentGamesIndex: 0,
  gamesLimit: divideProducts(10).length,
  activeFilter: null,
}