import products from "../api/products.json";
import { getCartProductsFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductsFromLS();

let filterProducts = products.filter((currProd) => {
    return cartProducts.some((currElem) => currElem.id === currProd.id);
});

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productTemplate");

const fetchQuantityFromCartLS = (id, price) => {
    let cartProducts = getCartProductsFromLS();
    let existingProduct = cartProducts.find((currProd) => currProd.id === id);
    let quantity = 1;
    if (existingProduct) {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }
    return { quantity, price };
};

const showCartProducts = () => {
    filterProducts.forEach((currProd) => {
        const { category, id, image, name, stock, price } = currProd;

        let productClone = document.importNode(templateContainer.content, true);
        const lSActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = `₹${lSActualData.price}`;
        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProdFromCart(id));
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            incrementDecrement(event, id, stock, price);
        });
        cartElement.appendChild(productClone);
    });
};

showCartProducts();
updateCartProductTotal();
