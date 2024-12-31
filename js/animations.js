const elementos = [
    { id: 'home-products', efecto: 'fade-in-left' },
    { id: 'services-img', efecto: 'fade-in-right' }
];


document.addEventListener("DOMContentLoaded", function () {
    elementos.forEach(({ id, efecto }) => {
        const element = document.getElementById(id);
        if (element) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(efecto);
                        observer.unobserve(entry.target);
                    }
                });
            });
            observer.observe(element);
        }
    });
});
