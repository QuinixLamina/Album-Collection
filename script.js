// script.js

let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");
let currentImg;
let isZoomed = false;

function openModal(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
    currentImg = img;

    // Reset zoom
    isZoomed = false;
    modalImg.classList.remove("zoom");
}

function closeModal() {
    modal.style.display = "none";
}

// Add a click event to toggle zoom on the modal image
modalImg.addEventListener("click", function() {
    if (isZoomed) {
        modalImg.classList.remove("zoom");
        isZoomed = false;
    } else {
        modalImg.classList.add("zoom");
        isZoomed = true;
    }
});

function showPrev() {
    let prevImg = currentImg.parentElement.previousElementSibling?.querySelector('img');
    if (prevImg) {
        openModal(prevImg);
    }
}

function showNext() {
    let nextImg = currentImg.parentElement.nextElementSibling?.querySelector('img');
    if (nextImg) {
        openModal(nextImg);
    }
}
