window.onload = function WindowLoad(event) { // icon
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = 'resc/icon.png';
}
var d=document,p="property",c="content",a=d.createElement("meta");a.setAttribute(p,"og:title"),a.setAttribute(c,"Ideal Broccoli");var b=d.createElement("meta");b.setAttribute(p,"og:description"),b.setAttribute(c,"Ideal Broccoli is an innovative e-commerce platform that offers a wide range of cooking products.");var h=d.getElementsByTagName("head")[0];h.appendChild(a);h.appendChild(b);