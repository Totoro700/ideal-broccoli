const productContainer = document.getElementById("productContainer")

function NewProduct(name, price, url) {
    var productHtml = `<div class="product"><a href="${url}"><h1>${name}</h1><h3>$${price}</h3></a></div>`;
    productContainer.innerHTML += productHtml;
}

function ClearProducts() {
    productContainer.innerHTML = "";
}

NewProduct("Example product", "10.00", "simplepaymentform.html?dollars=10")
NewProduct("Example product", "10.00", "simplepaymentform.html?dollars=10")
NewProduct("Example product", "10.00", "simplepaymentform.html?dollars=10")
NewProduct("Example product", "10.00", "simplepaymentform.html?dollars=10")
NewProduct("Example product", "10.00", "simplepaymentform.html?dollars=10")
NewProduct("Example product", "10.00", "simplepaymentform.html?dollars=10")
NewProduct("Example product", "10.00", "simplepaymentform.html?dollars=10")