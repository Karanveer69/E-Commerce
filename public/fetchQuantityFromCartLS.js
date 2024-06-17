import { getCartProductsFromLS } from "./getCartProducts";

export const fetchQuantityFromCartLS = (id,price) =>{
    let cartProducts = getCartProductsFromLSoductsFromLS();
    let existingProduct = cartProducts.find((currProd)=>currProd.id===id);
    let quantity = 1;
    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }


};