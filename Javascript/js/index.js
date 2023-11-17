// contenedor de productos
const catalogoContent = document.getElementById("catalogo__content");
const categoriasContainer = document.querySelector(".catalogo__container-categorias");
const catalogoCategorias = document.querySelectorAll(".catalogo__categorias");
// ver mas 
const btnShowMore = document.querySelector(".catalogo-btn");
// Carrito
const cartBtn = document.querySelector(".cart-btn");
const menu = document.querySelector(".menu");
const cartNav = document.querySelector(".cart");
const barsMenu = document.querySelector(".nav-list");
const overlay = document.querySelector(".overlay");
const cartNumber = document.querySelector(".cart-number");
const total = document.querySelector(".total");
const buyBtn = document.querySelector(".btn-buy");
const deleteBtn = document.querySelector(".btn-delete");
const productsCart = document.querySelector(".cart-container");
const successModal = document.querySelector('.add-modal')

let cart = JSON.parse(localStorage.getItem('cart')) || []

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

//crear html producto
const createProduct = (game) => {
 return `
 <div class="card">
    <img class="card__ph" src="${game.url}">
    <p class="card__nombre">${game.nombre}</p>
    <p class="card__precio">$ ${game.precio}</p>
    <button class="card__add" 
    data-id= "${game.id}" 
    data-nombre="${game.nombre}"
    data-url="${game.url}"
    data-precio="${game.precio}"
    >
    <i class="bi bi-cart2"></i> Agregar
    </button>
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
// Funcion para ocultar el boton ver mas 
const setShowMoreVisibility = () => {
  if (!appState.activeFilter) {
    btnShowMore.classList.remove("hidden");
  }

  btnShowMore.classList.add("hidden");
};

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
// carrito 

const toggleCart = () => {
  cartNav.classList.toggle('open-cart')
}

const toggleMenu = () => {
  barsMenu.classList.toggle('open-menu')
}

const closeOnScroll = () => {
  if (
    barsMenu.classList.contains("open-menu") &&
    cart.classList.contains("open-cart")
  ) {
    return;
  }
  barsMenu.classList.remove("open-menu");
  cartNav.classList.remove("open-cart");
};

// Funcion para crear el template del producto en el carrito
const createCartProductTemplate = (cartProduct) => {
  const {precio, id, url, nombre} = cartProduct

  return `
  <div class="cart-item">
  <img class="card__ph" src="${url}">
  <p class="card__nombre">${nombre}</p>
  <p class="card__precio">$ ${precio}</p>

  `
} 

// Render carrito
const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(createCartProductTemplate).join('')
};

// total de la compra
const getCartTotal = () => {
  return cart.reduce((acc, cur) => acc +Number(cur.precio), 0) 
}

// total del carrito
const showCartTotal = () => {
  total.innerHTML = `${getCartTotal().toFixed(2)}`
}

const rendercartNumber = () => {
  cartNumber.textContent = cart.reduce((acc, cur) => acc + cur.quantity ,0)
}


// Funcion para habilitar o deshabilitar botones
const disableBtn = (btn) => {
  if(!cart.length){
    btn.classList.add('disabled')
  } else {
    btn.classList.remove('disabled')
  } 
}


const updateCartState = () => {
  saveCart()
  renderCart();
  showCartTotal();
  disableBtn(buyBtn)
  disableBtn(deleteBtn)
  rendercartNumber()
}
const addProduct = (e) => {
  if(!e.target.classList.contains("card__add")) return;
  const product = e.target.dataset;

  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal('Se agrego un juego')
  } else {
    createCartProduct(product);
    showSuccessModal('Juego añadido')
  }

  
  updateCartState()
};
// Funcion para agregar una unidad al producto
const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) =>
    cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct
  );
};

// saber si ya existe en el carrito
const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};


// Funcion para mostrar el modal
const showSuccessModal = (msg) => {
  successModal.classList.add('active-modal')
  successModal.textContent = msg

  setTimeout(() => {
    successModal.classList.remove('active-modal')
  },1500)
}


// Funcion para manejar el evento click de + en el producto carrito
const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find(item => item.id === id)
  addUnitToProduct(existingCartProduct)
}

// Funcion para manejar el evento click del - en el producto carrito
const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find(item => item.id === id)

  if(existingCartProduct.quantity === 1){
    if(window.confirm('Deseas eliminar el juego del carrito?')){
      removeProductFromCart(existingCartProduct)
    }
    return
  }

  substractProductUnit(existingCartProduct)
}

const substractProductUnit = (existingCartProduct) => {
  cart = cart.map((product) => {
    return product.id === existingCartProduct.id
    ? {...product, quantity: Number(product.quantity) - 1}
    : product
  })
}

const removeProductFromCart = (existingCartProduct) => {
  cart = cart.filter((product) => product.id !== existingCartProduct.id)
  updateCartState()
}



// Funcion para manejar la cantidad de los productos en el carro
const handleQuantity = (e) => {
  if(e.target.classList.contains('up')){
    handlePlusBtnEvent(e.target.dataset.id)
  } else if(e.target.classList.contains('down')){
    handleMinusBtnEvent(e.target.dataset.id)
  }

  // para todos los casos
  updateCartState()
}

const resetCartItems = () => {
  cart = []
  updateCartState()
}

const completeCartAction = (confirmMsg,successMsg) => {
  if(!cart.length) return
  if(window.confirm(confirmMsg)){
    resetCartItems()
    alert(successMsg)
  }
}

const completeBuy = () => {
  completeCartAction('Deseas realizar la compra?','Gracias por tu compra!')
}

const deleteCart = () => {
  completeCartAction('Deseas borrar todo el carrito?', 'No hay juegos en el carrito')
}


// Funcion init
const init = () => {
    //console.log(renderProducts);
    renderProducts(appState.products[0]);
    btnShowMore.addEventListener('click', showMoreGames);
    categoriasContainer.addEventListener('click', applyFilter);
    cartBtn.addEventListener("click", toggleCart);
    menu.addEventListener("click", toggleMenu);
    window.addEventListener("scroll", closeOnScroll);

    catalogoContent.addEventListener("click", addProduct);
    productsCart.addEventListener('click', handleQuantity)
    document.addEventListener("DOMContentLoaded", renderCart);
  
    buyBtn.addEventListener('click', completeBuy)
    deleteBtn.addEventListener('click', deleteCart)
    disableBtn(buyBtn)
    disableBtn(deleteBtn)
    rendercartNumber(cart)
}

init();
