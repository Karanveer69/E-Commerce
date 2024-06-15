export const addToCart = (event,id,stock) =>{
    let arrLocalStorageProduct = getCartProductFromLS();
    const currProductElement = document.querySelector(`#card${id}`);
    let quantity = currProductElement.querySelector(".productQuantity").innerText;
    let price = currProductElement.querySelector(".productPrice").innerText;
    price = price.replace("₹","");
    price = Number(price*quantity);
    quantity = Number(quantity);
    arrLocalStorageProduct.push({id,quantity,price});
    localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct));
}