const productContainer = document.getElementById("productContainer")

function NewProduct(name, price, url) {
    var productHtml = `<div class="product"><a href="${url}"><h1>${name}</h1><h3>$${price}</h3></a></div>`;
    productContainer.innerHTML += productHtml;
}

NewProduct("Example product", "10.00", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
NewProduct("Example product", "10.00", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
NewProduct("Example product", "10.00", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
NewProduct("Example product", "10.00", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
NewProduct("Example product", "10.00", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
NewProduct("Example product", "10.00", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
NewProduct("Example product", "10.00", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")