let emailMenu = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let iconMenuMobile = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");
let iconShopping = document.querySelector(".navbar-shopping-cart");
let asideShopping = document.querySelector(".product-detail");
let divcardscontainer = document.querySelector(".cards-container");
let productDetailLeft = document.querySelector(".product-detail-left");
let productDetailClose = document.querySelector(".product-detail-close");
let myordercontentContainer = document.querySelector(".my-order-content");
let countCarrito = document.querySelector(".navbar-shopping-cart div");
let totalCarrito = document.querySelector(".total");
let modal = document.querySelector(".modal");
let cerrarModal = document.querySelector(".boton-modal");
let productImageInfor = document.querySelector(
	".product-detail-left > img:nth-child(2)"
);
let labelPriceInfo = document.querySelector(
	".product-info-left p:nth-child(1)"
);
let labelNameInfo = document.querySelector(".product-info-left p:nth-child(2)");
let labelInforInfo = document.querySelector(
	".product-info-left p:nth-child(3)"
);
let buttonInfo = document.querySelector(".add-to-cart-button");
let productosEnCarrito = [];
let productoACarrito = [];

countCarrito.innerText = document.querySelectorAll(".shopping-cart").length;
totalCarrito.innerText = "$0.00";

emailMenu.addEventListener("click", toggleMenu);
iconMenuMobile.addEventListener("click", toggleMenuMobile);
iconShopping.addEventListener("click", toggleAsideShopping);
productDetailClose.addEventListener("click", closeProductDetail);
buttonInfo.addEventListener("click", butonClick);
cerrarModal.addEventListener("click", closeModal);

function butonClick() {
	agregarCarrito(productoACarrito);
}

function toggleMenu() {
	productDetailLeft.classList.add("inactive");
	asideShopping.classList.add("inactive");
	desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
	productDetailLeft.classList.add("inactive");
	asideShopping.classList.add("inactive");
	mobileMenu.classList.toggle("inactive");
}

function toggleAsideShopping() {
	productDetailLeft.classList.add("inactive");
	mobileMenu.classList.add("inactive");
	desktopMenu.classList.add("inactive");
	asideShopping.classList.toggle("inactive");
}

function openProductDetail() {
	asideShopping.classList.add("inactive");
	mobileMenu.classList.add("inactive");
	desktopMenu.classList.add("inactive");
	productDetailLeft.classList.remove("inactive");
}

function closeProductDetail() {
	productoACarrito = [];
	asideShopping.classList.add("inactive");
	mobileMenu.classList.add("inactive");
	desktopMenu.classList.add("inactive");
	productDetailLeft.classList.add("inactive");
}

function verificarProducto(nameProduct) {
	return productosEnCarrito.some(function (articulo) {
		return articulo === nameProduct;
	});
}

function closeModal() {
	modal.style.display = "none";
}

let productList = [];
productList.push({
	name: "Sandalias 1",
	price: 40000,
	image: "https://i.imgur.com/peAoyU7.jpg",
	desc: "👡👡.",
});
productList.push({
	name: "Sandalias 2",
	price: 60000,
	image: "https://i.imgur.com/MPiADns.jpg",
	desc: "👡👡.",
});
productList.push({
	name: "Sandalias 3",
	price: 40000,
	image: "https://i.imgur.com/lizIXI0.jpg",
	desc: "👡👡.",
});
productList.push({
	name: "Sandalias 4",
	price: 40000,
	image: "https://i.imgur.com/8V6OC6o.jpg",
	desc: "👡👡.",
});
productList.push({
	name: "Sandalias 5",
	price: 40000,
	image: "https://i.imgur.com/BDAf3jO.jpg",
	desc: "👡👡.",
});
productList.push({
	name: "Sandalias 6",
	price: 60000,
	image: "https://i.imgur.com/jmMi0ZH.jpg",
	desc: "👡👡.",
});
productList.push({
	name: "Sandalias 7",
	price: 40000,
	image: "https://i.imgur.com/bkisdAB.jpg",
	desc: "👡👡.",
});
productList.push({
	name: "Sandalias 8",
	price: 60000,
	image: "https://i.imgur.com/b52uom7.gif",
	desc: "👡👡.",
});
productList.push({
	name: "Sandalias 9",
	price: 40000,
	image: "https://i.imgur.com/LYdrftv.jpg",
	desc: "👡👡.",
});
productList.push({
	name: "Sandalias 10",
	price: 40000,
	image: "https://i.imgur.com/oEqJhDX.jpg",
	desc: "👡👡.",
});
productList.push({
	name: "Sandalias 11",
	price: 40000,
	image: "https://i.imgur.com/HZElZlA.jpg",
	desc: "👡👡.",
});
productList.push({
	name: "Sandalias 12",
	price: 50000,
	image: "https://i.imgur.com/XhHrBSk.jpg",
	desc: "👡👡.",
});
productList.push({
	name: "Sandalias 13",
	price: 40000,
	image: "https://i.imgur.com/3ZvIafE.jpg",
	desc: "👡👡.",
});

function renderListProduct(productList) {
	for (const product of productList) {
		let divproductCard = document.createElement("div");
		let imgproductcard = document.createElement("img");
		let divproductinfo = document.createElement("div");
		let divdivproductinfo = document.createElement("div");
		let pprice = document.createElement("p");
		let pname = document.createElement("p");
		let figureproductinfo = document.createElement("figure");
		let imgproductinfo = document.createElement("img");
		divproductCard.classList.add("product-card");
		imgproductcard.setAttribute("src", product.image);
		divproductinfo.classList.add("product-info");
		pprice.innerText = "$" + product.price;
		pname.innerText = product.name;
		imgproductinfo.setAttribute("src", "./icons/bt_add_to_cart.svg");

		figureproductinfo.appendChild(imgproductinfo);
		divdivproductinfo.appendChild(pprice);
		divdivproductinfo.appendChild(pname);

		divproductinfo.appendChild(divdivproductinfo);
		divproductinfo.appendChild(figureproductinfo);

		divproductCard.appendChild(imgproductcard);
		divproductCard.appendChild(divproductinfo);

		divcardscontainer.appendChild(divproductCard);

		imgproductcard.addEventListener("click", function () {
			mostrarInfoProduct(
				product.image,
				product.price,
				product.name,
				product.desc
			);
			openProductDetail();
		});

		imgproductinfo.addEventListener("click", function () {
			let productoAgregado = [];
			productoAgregado.push({
				name: product.name,
				price: product.price,
				image: product.image,
			});
			agregarCarrito(productoAgregado);
		});
	}
}

/* Funcion para agregar productos al carrito */
function agregarCarrito(producto) {
	if (verificarProducto(producto[0].name)) {
		productoACarrito = [];
		return (modal.style.display = "grid");
	}

	/* Creacion de elemtentos HTML */
	let divShoppingCart = document.createElement("div");
	let figureShoppingCart = document.createElement("figure");
	let imgfigureShoppingCart = document.createElement("img");
	let pnameShoppingCart = document.createElement("p");
	let ppriceShoppingCart = document.createElement("p");
	let imgcloseShoppingCart = document.createElement("img");

	/* Se agrega contenido a cada uno de los elementos */
	divShoppingCart.classList.add("shopping-cart");
	imgfigureShoppingCart.setAttribute("src", producto[0].image);
	pnameShoppingCart.innerText = producto[0].name;
	ppriceShoppingCart.innerText = "$" + producto[0].price;
	imgcloseShoppingCart.setAttribute("src", "./icons/icon_close.png");
	imgcloseShoppingCart.classList.add("removeList");

	/* Se insertan los documentos */
	figureShoppingCart.appendChild(imgfigureShoppingCart);
	divShoppingCart.appendChild(figureShoppingCart);
	divShoppingCart.appendChild(pnameShoppingCart);
	divShoppingCart.appendChild(ppriceShoppingCart);
	divShoppingCart.appendChild(imgcloseShoppingCart);
	myordercontentContainer.appendChild(divShoppingCart);

	/* Se agregan la cantidad de productos ademas de la suma de precios */
	countCarrito.innerText = document.querySelectorAll(".shopping-cart").length;
	totalCarrito.innerText =
		"$" +
		(Number(totalCarrito.innerText.substring(1)) + Number(producto[0].price));
	productosEnCarrito.push(producto[0].name);

	/* Funcion para quitar productos del carrito */
	imgcloseShoppingCart.addEventListener("click", function () {
		divShoppingCart.remove();
		countCarrito.innerText = document.querySelectorAll(".shopping-cart").length;
		totalCarrito.innerText =
			"$" +
			(Number(totalCarrito.innerText.substring(1)) - Number(producto[0].price));
		productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name), 1);
	});
}

function mostrarInfoProduct(imagen, precio, nombre, descripcion) {
	productImageInfor.setAttribute("src", imagen);
	labelPriceInfo.innerText = "$" + precio;
	labelNameInfo.innerText = nombre;
	labelInforInfo.innerText = descripcion;
	productoACarrito = [];
	productoACarrito.push({
		name: nombre,
		price: precio,
		image: imagen,
	});
}

renderListProduct(productList);
