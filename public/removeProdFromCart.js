import { getCartProductsFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductsFromLS();
    cartProducts = cartProducts.filter((currProd) => currProd.id !== id);

    localStorage.setItem('cartProductsLS', JSON.stringify(cartProducts));

    const removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();
    }

    updateCartValue(cartProducts);
};
