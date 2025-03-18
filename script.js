document.addEventListener("DOMContentLoaded", function () {
    const rainContainer = document.querySelector(".rain");
    
    function createRaindrop() {
        const drop = document.createElement("div");
        drop.classList.add("drop");
        
        drop.style.left = Math.random() * 100 + "vw";
        drop.style.animationDuration = (Math.random() * 1.5 + 0.5) + "s";
        
        rainContainer.appendChild(drop);
        
        setTimeout(() => {
            drop.remove();
        }, 2000);
    }
    
    setInterval(createRaindrop, 100);
});
