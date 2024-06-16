// updateCartValue.js

const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
    const totalItems = cartProducts.reduce((acc, product) => acc + product.quantity, 0);
    cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${totalItems}`;
};
