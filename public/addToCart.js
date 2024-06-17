import { updateCartValue } from "./updateCartValue";
import { getCartProductsFromLS } from "./getCartProducts";

export const addToCart = (event, id, stock) => {
    let arrLocalStorageProduct = getCartProductsFromLS();

    const currProductElement = document.querySelector(`#card${id}`);
    let quantity = parseInt(currProductElement.querySelector(".productQuantity").innerText);
    let price = parseFloat(currProductElement.querySelector(".productPrice").innerText.replace("₹", ""));

    let existingProduct = arrLocalStorageProduct.find((currProd) => currProd.id === id);

    if (existingProduct) {
        // Compare and update quantity to the larger one
        quantity = Math.max(existingProduct.quantity, quantity);
        price = (existingProduct.price / existingProduct.quantity) * quantity;

        // Update the existing product
        arrLocalStorageProduct = arrLocalStorageProduct.map((currProd) => 
            currProd.id === id ? { ...currProd, quantity, price } : currProd
        );
    } else {
        // New product
        price = price * quantity;
        arrLocalStorageProduct.push({ id, quantity, price });
    }

    localStorage.setItem('cartProductsLS', JSON.stringify(arrLocalStorageProduct));
    updateCartValue(arrLocalStorageProduct);
};
