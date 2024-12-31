let currentIndex = 0;
let items = document.getElementsByClassName('carousel-item');
const totalItems = items.length;

const CAROUSEL_SLIDE_DELAY = 4 //segundos

const MAX_REPEAT_COUNT = 3

let autoSlideInterval;

document.getElementById('next').addEventListener('click', () => {
    moveToNextItem()
    resetAutoSlide()
});

document.getElementById('prev').addEventListener('click', () => {
    moveToPreviousItem()
    resetAutoSlide()
});


function updateCarousel() {
    const offset = -currentIndex * 100;
    document.getElementById('carousel').style.transform = `translateX(${offset}%)`;

    // Clonar el último elemento y agregar uno nuevo si es necesario
    // if (currentIndex >= totalItems - 2) {
    //     // Asegurarte de que hay al menos un elemento para clonar
    //     if (totalItems > 0) {
    //         // Clonación correcta del último elemento
    //         let nextItem = items[totalItems - 1].cloneNode(true);
    //         // Agregar el nuevo elemento al final del carrusel
    //         document.getElementById('carousel').appendChild(nextItem);
    //         console.log("cantidad de items:", items.length);
    //         console.log("ELEMENTO AGREGADO");
    //     }
    // }
}

function startAutoSlide() {
    autoSlideInterval = setInterval(moveToNextItem, CAROUSEL_SLIDE_DELAY * 1000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function moveToPreviousItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function moveToNextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function resetAutoSlide() {
    stopAutoSlide();  
    startAutoSlide(); 
}


startAutoSlide()





// Touch slides para dispositivos tactiles

const carousel = document.getElementById('carousel');
let startX = 0;
let endX = 0;

carousel.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX; 
});

carousel.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX; 
});

carousel.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        nextSlide();
    } else if (startX < endX - 50) {
        prevSlide();
    }
});


function nextSlide() {
    moveToNextItem()
    resetAutoSlide()
}


function prevSlide() {
    moveToPreviousItem()
    resetAutoSlide()
}