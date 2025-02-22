
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (elementPosition < screenPosition) {
                element.classList.add('aos-animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check for elements in view

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
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.4}px)`;
});

