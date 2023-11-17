// contenedor de productos
const catalogoContent = document.getElementById("catalogo__content");
const categoriasContainer = document.querySelector(".catalogo__container-categorias");
const catalogoCategorias = document.querySelectorAll(".catalogo__categorias");
// ver mas 
const btnShowMore = document.querySelector(".catalogo-btn");


//crear html producto
const createProduct = (game) => {
 return `
 <div class="card">
    <img class="card__ph" src="${game.url}">
    <p class="card__nombre">${game.nombre}</p>
    <p class="card__precio">$ ${game.precio}</p>
    <button class="card__button"><i class="bi bi-cart2"></i> Agregar</button>
 </div>`
}

// Renderizacion de productos
const renderProducts = (pruductList) => {
    catalogoContent.innerHTML += pruductList
    .map(createProduct)
    .join("");

}

// Funcion final del array
const isLastIndexOf = () => {
    return appState.currentGamesIndex === appState.gamesLimit - 1;
  };

//Funcion Ver mas

const showMoreGames = () => {
  appState.currentGamesIndex += 1;

  let { products, currentGamesIndex } = appState;

  renderProducts(products[currentGamesIndex]);

  if (isLastIndexOf()) {
    btnShowMore.classList.add("hidden");
  }
};
// Funcion para ocultar el boton ver mas si hay una categoria seleccionada
const setShowMoreVisibility = () => {
  if (!appState.activeFilter) {
    btnShowMore.classList.remove("hidden");
  }

  btnShowMore.classList.add("hidden");
};
// Funcion para cambiar el estado de los botones de las categorias
const changeBtnActive = (selectedCategory) => {
    const categoriasList = [...catalogoCategorias];
  
    categoriasList.forEach((categoryBtn) => {
      if (categoryBtn.dataset.categoria !== selectedCategory) {
        categoryBtn.classList.remove("active");
        return;
      }
  
      categoryBtn.classList.add("active");
    });
  };
  
// cambio filtros activos
const changeFilter = (btn) =>{
    appState.activeFilter = btn.dataset.categoria;
    changeBtnActive(appState.activeFilter);
    setShowMoreVisibility(appState.activeFilter);
}
// Funcion para filtrar los productos
const renderFilteredProducts = () => {
  const filteredProducts = games.filter(
    (game) => game.categoria === appState.activeFilter
  );

  renderProducts(filteredProducts);
};

// Funcion para aplicar filtro
const applyFilter = ({ target }) => {
    if (!noActive(target)) return;
    changeFilter(target);
    catalogoContent.innerHTML = "";
    if (appState.activeFilter) {
      renderFilteredProducts();
      appState.currentGamesIndex = 0;
      return;
    }
    renderProducts(appState.products[0]);
  };

const noActive = (element) =>{
 return (
 element.classList.contains("catalogo__categorias") &&
 !element.classList.contains("active") 
 )
}
// Funcion init
const init = () => {
 //console.log(renderProducts);
 renderProducts(appState.products[0]);
 btnShowMore.addEventListener('click', showMoreGames);
 categoriasContainer.addEventListener('click', applyFilter)

}
init();
