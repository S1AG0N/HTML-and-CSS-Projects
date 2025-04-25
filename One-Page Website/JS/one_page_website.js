document.addEventListener('DOMContentLoaded', function() {
    // Lightbox functionality
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const closeButton = document.querySelector('.lightbox-close');

    // Open lightbox when clicking on images
    lightboxTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const fullSizeSrc = this.dataset.large;
            lightboxImage.src = fullSizeSrc;
            lightbox.style.display = 'flex';
        });
    });

    // Close lightbox when clicking close button
    closeButton.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Close lightbox with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
        }
    });
});