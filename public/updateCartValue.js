export const updateCartValue = (arrLocalStorageProduct) => {
    const cartValueElement = document.getElementById('cartValue');
    const totalItems = arrLocalStorageProduct.reduce((acc, currProd) => acc + currProd.quantity, 0);
    cartValueElement.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${totalItems}`;
};
