window.onload=function e(t){var r=document.querySelector("link[rel~='icon']");r||((r=document.createElement("link")).rel="icon",document.head.appendChild(r)),r.href="resc/icon.png"};var d=document,p="property",c="content",a=d.createElement("meta");a.setAttribute(p,"og:title"),a.setAttribute(c,"Ideal Broccoli");var b=d.createElement("meta");b.setAttribute(p,"og:description"),b.setAttribute(c,"Ideal Broccoli is an innovative e-commerce platform that offers a wide range of cooking products.");var h=d.getElementsByTagName("head")[0];h.appendChild(a),h.appendChild(b);

window.onload = function WindowLoad(event) {
    var cookieNotice = document.createElement('div');
    cookieNotice.id = 'cookies';
    cookieNotice.innerHTML = 'This website uses cookies. Cookies help enchance your experience on this site. <button id="acceptCookie" class="cookiebuttons" onclick="acceptCookies()">Accept the Cookies</button> <button id="denyCookie" class="cookiebuttons">Invoke the wrath of <b><i>The Cookie Monster</i></b> (deny cookies)</button>';
    document.body.appendChild(cookieNotice);
    
    document.getElementById('acceptCookie').addEventListener('click', function() {
        localStorage.setItem('cookieChoice', 'accepted');
        document.getElementById('cookies').style.display = 'none';
    });
    
    document.getElementById('denyCookie').addEventListener('click', function() {
        localStorage.setItem('cookieChoice', 'denied');
        document.getElementById('cookies').style.display = 'none';
    });
    
    document.getElementById('cookies').style.display = 'block';
}