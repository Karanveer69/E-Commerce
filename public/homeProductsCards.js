const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductsContainer = (products) => {
    if (!products || products.length === 0) {
        return false;
    }

    products.forEach((curProd) => {
        const { brand, category, description, id, image, name, price, stock } = curProd;

        const productClone = document.importNode(productTemplate.content, true);
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${price * 69}`;
        productClone.querySelector(".productStock").textContent = stock;

        productContainer.append(productClone);
    });
};
