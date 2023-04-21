// script para que el boton aparezca cuando el usuario haga scroll

const botonSubir = document.getElementById("boton-subir");

window.addEventListener("scroll", () => {
  var scrollPos = window.scrollY;
  if (scrollPos > 300) {
    botonSubir.classList.add("visible");
    botonSubir.classList.remove("hidden");
  } else {
    botonSubir.classList.add("hidden");
    botonSubir.classList.remove("visible");
  }
});

// menu hamburguesa
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
const menu_items = document.querySelectorAll(".btn-menu");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

menu_items.forEach(function (item) {
  item.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
});

//banner de productos
var counter = 2;
if (window.location.pathname === "/index.html") {
  setInterval(function autoScroll() {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 3) {
      counter = 1;
    }
  }, 5000);
}

//script carrito de compras

const btnCart = document.querySelector(".container-cart-icon");
const containerCartProducts = document.querySelector(
  ".container-cart-products"
);

btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
});

/* ========================= */
const cartInfo = document.querySelector(".cart-product");
const rowProduct = document.querySelector(".row-product");

// Lista de todos los contenedores de productos
const productsList = document.querySelector(".container-items");

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector(".total-pagar");

const countProducts = document.querySelector("#contador-productos");

const cartEmpty = document.querySelector(".cart-empty");
const cartTotal = document.querySelector(".cart-total");

productsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add-cart")) {
    const product = e.target.parentElement;

    const infoProduct = {
      quantity: 1,
      title: product.querySelector("h2").textContent,
      price: product.querySelector("p").textContent,
    };

    const exits = allProducts.some(
      (product) => product.title === infoProduct.title
    );

    if (exits) {
      const products = allProducts.map((product) => {
        if (product.title === infoProduct.title) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      });
      allProducts = [...products];
    } else {
      allProducts = [...allProducts, infoProduct];
    }

    showHTML();
  }
});

rowProduct.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon-close")) {
    const product = e.target.parentElement;
    const title = product.querySelector("p").textContent;

    allProducts = allProducts.filter((product) => product.title !== title);

    console.log(allProducts);

    showHTML();
  }
});

// Funcion para mostrar  HTML
const showHTML = () => {
  if (!allProducts.length) {
    cartEmpty.classList.remove("hidden");
    rowProduct.classList.add("hidden");
    cartTotal.classList.add("hidden");
  } else {
    cartEmpty.classList.add("hidden");
    rowProduct.classList.remove("hidden");
    cartTotal.classList.remove("hidden");
  }

  // Limpiar HTML
  rowProduct.innerHTML = "";

  let total = 0;
  let totalOfProducts = 0;

  allProducts.forEach((product) => {
    const containerProduct = document.createElement("div");
    containerProduct.classList.add("cart-product");

    containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

    rowProduct.append(containerProduct);

    total = total + parseInt(product.quantity * product.price.slice(1));
    totalOfProducts = totalOfProducts + product.quantity;
  });

  valorTotal.innerText = `$${total}`;
  countProducts.innerText = totalOfProducts;
};

//script para personas
const radio1 = document.getElementById("radio1-p");
const radio2 = document.getElementById("radio2-p");
const radio3 = document.getElementById("radio3-p");
const radio4 = document.getElementById("radio4-p");
const cargo = document.getElementById("cargo");
const nombre = documnet.getElementById("nombre");

if (radio1.checked) {
  nombre.textContent = "Federico Galeano";
  cargo.textContent = "CEO";
} else if (radio2.checked) {
  nombre.textContent = "Nicolás Reyna";
  cargo.textContent = "CFO";
} else if (radio3.checked) {
  nombre.textContent = "Martín Frávega";
  cargo.textContent = "COO";
} else if (radio4.checked) {
  nombre.textContent = "Agustín Billordo";
  cargo.textContent = "CMO";
} else {
  console.log("Ninguna opción está seleccionada.");
}
