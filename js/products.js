let cookies = false;

function NewProduct(name, price, url) {
    const productContainer = document.getElementById("productContainer");
    var productHtml = `<div class="product" onclick="handleClick(${price})"><h1>${name}</h1><h3>$${price}</h3></div>`;
    productContainer.innerHTML += productHtml;
}

function acceptCookies() {
    cookies = true;
    document.cookie = "cookies=true;";
}

function denyCookie() {
    cookies = false;
}

function handleClick(cost) {
    console.log("Cost: " + cost);
}

function genProducts() {
    fetch("http://localhost:8080/api/v1/getItems")
        .then(response => response.text())
        .then(dat => {
            let lines = dat.split("\n");
            let line;
            for (var i = 0; i < lines.length; i++) {
                line = lines[i].trim().split(" ");
                if (line.length !== 2) continue;
                NewProduct(line[0].replaceAll("_"," "), line[1]);
            }
        })
        .catch(err => console.log(err));
}