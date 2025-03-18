document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const text = "Selamat Datang di Website Kami";
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
