import { getCartProductsFromLS } from "./getCartProducts";

export const incrementDecrement = (event, id, stock, price) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = parseInt(productQuantity.innerText) || 1;
    let localCartProducts = getCartProductsFromLS();
    let existingProduct = localCartProducts.find((currProd) => currProd.id === id);

    if (event.target.classList.contains("cartIncrement")) {
        if (quantity < stock) {
            quantity += 1;
        } else {
            quantity = stock;
        }
    } else if (event.target.classList.contains("cartDecrement")) {
        if (quantity > 1) {
            quantity -= 1;
        } else {
            quantity = 1;
        }
    }

    let localStoragePrice = price * quantity;

    if (existingProduct) {
        existingProduct.quantity = quantity;
        existingProduct.price = localStoragePrice;
    } else {
        localCartProducts.push({ id, quantity, price: localStoragePrice });
    }

    localStorage.setItem('cartProductsLS', JSON.stringify(localCartProducts));

    productQuantity.innerText = quantity;
    productPrice.innerText = `₹${localStoragePrice}`;
};
