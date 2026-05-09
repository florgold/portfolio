document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.category-link');
    const sections = document.querySelectorAll('.content-section');
    const contentArea = document.querySelector('.content-area');
    const logoHome = document.getElementById('logo-home');

    // Función para cambiar de sección
    function showSection(categoryId) {
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === categoryId) {
                section.classList.add('active');
            }
        });
        if (contentArea) contentArea.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Clic en las categorías del menú
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            showSection(this.getAttribute('data-category'));
        });
    });

    // Clic en el LOGO (Home)
    logoHome.addEventListener('click', function(e) {
        e.preventDefault();
        // Quitamos el verde de cualquier categoría activa
        links.forEach(l => l.classList.remove('active'));
        // Mostramos la sección de la foto inicial (id="landing")
        showSection('landing');
    });
});