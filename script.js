
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Add active class to current nav link
    const currentLocation = location.href;
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });
});

// Simple parallax effect for the hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
});
