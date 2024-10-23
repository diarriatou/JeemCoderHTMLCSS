document.addEventListener("DOMContentLoaded", function() {
    var videoCover = document.getElementById('video-cover');
    var videoIframe = document.getElementById('video-iframe');

    if (videoCover && videoIframe) {  // Vérifie que les éléments existent
        videoCover.addEventListener('click', function() {
            videoCover.style.display = 'none';  // Masque l'image de couverture
            videoIframe.style.display = 'block';  // Affiche l'iframe vidéo
        });
    }
});