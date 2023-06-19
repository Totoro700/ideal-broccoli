const htmlCode = '<div class="header"><h3 class="headerlink"><a href="index.html" class="headerlinkhome">Home</a></h3><h3 class="headerlink"><a href="products.html" class="headerlinklink">Products</a></h3><h3 class="headerlink"><a href="contact.html" class="headerlinklink">Contact</a></h3><h3 class="headerlink"><a href="about.html" class="headerlinklink">About</a></h3><h3 class="headerlink"><a href="index.html" class="headerlinklink">idfk</a></h3><a href="#" class="menu-btn"><img src="resc/menu-icon.png" alt="MenuButton" width="50" height="50"></a></div><br><br><br><br><br>';
document.body.insertAdjacentHTML("afterbegin", htmlCode);

const headers = document.querySelectorAll('.header');
const menuBtn = document.querySelector('.menu-btn');

window.addEventListener('scroll', function() {
    const scrollY = window.pageYOffset;
    const isAtTop = scrollY === 0; // Check if the user is at the top of the page

    if (isAtTop) {
        headers.forEach(header => {
            header.style.transform = 'translateX(0)';
            header.classList.remove('collapsed');
            header.style.height = '75px';
            header.style.opacity = '1';
        });
        menuBtn.style.transform = 'translateX(0)';
        menuBtn.style.opacity = '1';
    } else {
        headers.forEach(header => {
            header.style.transform = 'translateX(-100%)';
            header.classList.add('collapsed');
            header.style.height = '50px';
            header.style.opacity = '0';
        });
        menuBtn.style.transform = 'translateX(0)';
        menuBtn.style.opacity = '1';
    }
});