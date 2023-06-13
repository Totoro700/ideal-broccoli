const container = document.getElementById("container");

const newProduct = document.createElement("div");

function createProduct(name, description) {
    newProduct.classList.add("product");
    container.appendChild(newProduct);
}
