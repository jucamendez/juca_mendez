// Menu móvil y efectos del footer
document.addEventListener('DOMContentLoaded', () => {
    // Hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Efecto hover para GitHub
    const githubLink = document.querySelector('.github-link');
    if(githubLink) {
        githubLink.addEventListener('mouseenter', () => {
            githubLink.innerHTML = '<i class="fas fa-home"></i>';
        });
        githubLink.addEventListener('mouseleave', () => {
            githubLink.innerHTML = '<i class="fab fa-github"></i>';
        });
    }
});