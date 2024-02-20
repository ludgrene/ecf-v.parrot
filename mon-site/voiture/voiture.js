document.addEventListener('DOMContentLoaded', function() {
    // d'événements pour le bouton de contact
    document.getElementById('contactButton').addEventListener('click', function() {
        alert('tel:  +33 97778887');
    });

    // pour l'effet de zoom
    let zoomableImages = document.querySelectorAll('.zoomable');
    zoomableImages.forEach(function(img) {
        img.addEventListener('click', function() {
            img.classList.toggle('zoomed');
        });
    });
});
