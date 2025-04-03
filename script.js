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

// Modal Popup Effect
const modal = document.createElement('div');
modal.innerHTML = `
    <div id="modal" class="modal-overlay">
        <div class="modal-content">
            <h2>Welcome to Perpustakaan AgengHN!</h2>
            <p>This is a simple modal popup that provides additional information.</p>
            <button id="closeModal" class="btn">Close</button>
        </div>
    </div>
`;
document.body.appendChild(modal);

const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Show modal on page load (you can remove this line to make modal triggered by a button)
window.onload = () => {
    document.getElementById('modal').style.display = 'flex';
};
