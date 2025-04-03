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

// Navbar color change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#3b4c64"; // Darker color after scroll
    } else {
        navbar.style.backgroundColor = "#87CEEB"; // Original color when at the top
    }
});
