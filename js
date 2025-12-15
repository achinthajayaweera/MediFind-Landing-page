// Counter Animation for Delivery Counter
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.textContent = currentValue.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize counter animation when page loads
window.addEventListener('load', () => {
    const counterElement = document.getElementById('deliveryCounter');
    const targetNumber = 57854;
    animateCounter(counterElement, 0, targetNumber, 2500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 22, 40, 0.98)';
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 22, 40, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// Contact form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Section reveal on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Mobile menu toggle
const createMobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    let menuToggle = document.querySelector('.menu-toggle');

    if (!menuToggle) {
        menuToggle = document.createElement('div');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.style.fontSize = '30px';
        menuToggle.style.cursor = 'pointer';
        menuToggle.style.color = '#4ECDC4';
        document.querySelector('.navbar .container').insertBefore(menuToggle, navMenu);

        menuToggle.addEventListener('click', () => {
            navMenu.style.display =
                navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        navMenu.style.display = 'none';
    } else {
        menuToggle.style.display = 'none';
        navMenu.style.display = 'flex';
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Spinning globe interaction
const spinningGlobe = document.getElementById('spinningGlobe');
if (spinningGlobe) {
    spinningGlobe.addEventListener('mouseenter', () => {
        spinningGlobe.style.animationDuration = '8s';
    });
    spinningGlobe.addEventListener('mouseleave', () => {
        spinningGlobe.style.animationDuration = '20s';
    });
}

// 404 Modal logic
const modal = document.getElementById('modal404');
const downloadBtn = document.getElementById('downloadAppBtn');
const closeBtn = document.querySelector('.close');

if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Stats animation on view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent.replace(/,/g, ''));
                animateCounter(stat, 0, target, 1500);
            });
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Hero parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');

    if (heroText && scrolled < window.innerHeight) {
        heroText.style.transform = `translateY(${scrolled * 0.3}px)`;
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    }
});

console.log('Medifine website loaded successfully!');
