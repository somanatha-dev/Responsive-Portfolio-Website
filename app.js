function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const navSocial = document.querySelector('.nav-social');
    
    navLinks.classList.toggle('active');
    navSocial.classList.toggle('active');
}