// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get all dot elements
    const dots = document.querySelectorAll('.dot');

    dots.forEach(dot => {
        dot.addEventListener('mouseenter', function() {
            this.classList.add('dot-hover');
        });

        dot.addEventListener('mouseleave', function() {
            this.classList.remove('dot-hover');
        });
    });
});
