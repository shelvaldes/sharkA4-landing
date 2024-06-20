document.addEventListener('click', function(event) {
    let menu = document.getElementById('mobileMenu');
    let hamburger = document.querySelector('.hamburger');
    
    // Verificar si el clic fue fuera del menú y del botón de hamburguesa
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('show');
    }
});

function toggleMenu() {
    var menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
}