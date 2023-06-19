const htmlCode = '<div class="header"><h3 class="headerlink"><a href="index.html" class="headerlinkhome">Home</a></h3><h3 class="headerlink"><a href="products.html" class="headerlinklink">Products</a></h3><h3 class="headerlink"><a href="contact.html" class="headerlinklink">Contact</a></h3><h3 class="headerlink"><a href="about.html" class="headerlinklink">About</a></h3><h3 class="headerlink"><a href="index.html" class="headerlinklink">idfk</a></h3></div><a href="javascript:toggleHeader()" class="menu-btn"><img class="" src="resc/menu-icon.png" alt="MenuButton" width="40" height="40"></a><br><br><br><br><br>';
document.body.insertAdjacentHTML("afterbegin", htmlCode);

const headers = document.querySelectorAll('.header');
const menuBtn = document.querySelector('.menu-btn');

var isShown = false;

window.addEventListener('scroll', function() {
    const isAtTop = window.pageYOffset === 0;
    if (isAtTop) {
        showHeader()
        hideHeaderButton()
        isShown = true
    } else {
        isShown = false
        if (isShown) {
            return
        } else {
            hideHeader()
            showHeaderButton()
        }
    }
});

function showHeader() {
    isShown = true;
    headers.forEach(header => {
        header.style.transform = 'translateX(0)';
        header.style.height = '75px';
    });
}

function hideHeader() {
    isShown = false;
    headers.forEach(header => {
        header.style.transform = 'translateX(-100%)';
        header.style.height = '50px';
    });
}

function showHeaderButton() {
    //menuBtn.style.opacity = '1';
    //menuBtn.style.display = 'block';
    menuBtn.classList.add('shown');
}

function hideHeaderButton() {
    //menuBtn.style.opacity = '0';
    //menuBtn.style.display = 'none';
    menuBtn.classList.remove('shown');
}

function toggleHeader() {
    if (isShown) { // is visible
        hideHeader()
    } else {
        showHeader()
    }
}