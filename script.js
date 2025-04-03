document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const text = "Selamat Datang di Website Saya";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            header.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    
    header.innerHTML = ""; // Kosongkan header sebelum mengetik
    typeEffect();
});

// Toggle Navbar for mobile
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function() {
    // Toggle visibility of the navbar collapse
    navbarCollapse.classList.toggle('show');
});
