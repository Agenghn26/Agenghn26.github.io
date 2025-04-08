document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".h1");
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

