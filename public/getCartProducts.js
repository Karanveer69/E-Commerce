// getCartProducts.js

import { updateCartValue } from "./updateCartValue";

export const getCartProductsFromLS = () => {
    let cartProducts = localStorage.getItem("cartProductsLS");
    if (!cartProducts) {
        cartProducts = [];
    } else {
        cartProducts = JSON.parse(cartProducts);
    }
    updateCartValue(cartProducts);
    return cartProducts;
};
