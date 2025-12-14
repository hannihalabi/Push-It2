// =================================================
// BOFFO Agency - JavaScript
// =================================================

document.addEventListener('DOMContentLoaded', function () {

    // Video Playlist - Sequential Playback
    initVideoPlaylist();

    // Mobile Menu Toggle
    initMobileMenu();

    // Scroll Animations
    initScrollAnimations();

    // Newsletter Form
    initNewsletterForm();

    // Header Scroll Effect
    initHeaderScroll();

});

// Video Playlist - Play videos sequentially
function initVideoPlaylist() {
    const heroVideo = document.getElementById('heroVideo');

    if (!heroVideo) return;

    const videoPlaylist = ['pushit1.mp4', 'pushit2.mp4', 'pushit3.mp4', 'pushit4.mp4'];
    let currentVideoIndex = 0;

    heroVideo.addEventListener('ended', function () {
        // Move to next video
        currentVideoIndex = (currentVideoIndex + 1) % videoPlaylist.length;

        // Update video source
        heroVideo.querySelector('source').src = videoPlaylist[currentVideoIndex];
        heroVideo.load();
        heroVideo.play();
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function (e) {
        if (e.target === mobileMenu) {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Scroll Animations - Intersection Observer
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in-scroll');

    if (!fadeElements.length) return;

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
}

// Newsletter Form Handling
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');

    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = newsletterForm.querySelector('.newsletter-input');
        const submitButton = newsletterForm.querySelector('.newsletter-submit');
        const email = emailInput.value.trim();

        // Basic email validation
        if (!isValidEmail(email)) {
            showMessage(emailInput, 'Please enter a valid email address', 'error');
            return;
        }

        // Disable button during submission
        submitButton.disabled = true;
        submitButton.textContent = 'Subscribing...';

        // Simulate API call (replace with actual API endpoint)
        setTimeout(() => {
            showMessage(emailInput, 'Thank you for subscribing!', 'success');
            emailInput.value = '';
            submitButton.disabled = false;
            submitButton.textContent = 'Subscribe';
        }, 1000);
    });
}

// Email Validation Helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show Message Helper
function showMessage(input, message, type) {
    // Create or update message element
    let messageEl = input.parentElement.querySelector('.form-message');

    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.className = 'form-message';
        input.parentElement.appendChild(messageEl);
    }

    messageEl.textContent = message;
    messageEl.className = `form-message ${type}`;
    messageEl.style.cssText = `
        margin-top: 0.5rem;
        font-size: 0.875rem;
        color: ${type === 'error' ? '#ff4444' : '#44ff44'};
        animation: fadeIn 0.3s ease;
    `;

    // Remove message after 3 seconds
    setTimeout(() => {
        if (messageEl && messageEl.parentElement) {
            messageEl.remove();
        }
    }, 3000);
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    let ticking = false;

    if (!header) return;

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                handleHeaderScroll(header, lastScroll);
                lastScroll = window.pageYOffset;
                ticking = false;
            });
            ticking = true;
        }
    });
}

function handleHeaderScroll(header, lastScroll) {
    const currentScroll = window.pageYOffset;

    // Hide header on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }

    // Add shadow on scroll
    if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        header.style.boxShadow = 'none';
    }
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if just "#"
        if (href === '#' || href === '#login' || href === '#apply' || href === '#contact' || href === '#privacy') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax Effect for Hero (Optional Enhancement)
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    let ticking = false;

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                hero.style.transform = `translateY(${parallax}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Optional: Initialize parallax effect
// initParallax();

// Horizontal Scroll for Collaborations (Touch/Mouse)
function initHorizontalScroll() {
    const scrollContainer = document.querySelector('.collaborations-scroll');
    if (!scrollContainer) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.style.cursor = 'grabbing';
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.style.cursor = 'grab';
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.style.cursor = 'grab';
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
}

// Initialize horizontal scroll
initHorizontalScroll();

// Loading Animation
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Console signature
console.log('%cBOFFO Agency', 'font-size: 24px; font-weight: bold; color: #000;');
console.log('%cWebsite clone created with ❤️', 'font-size: 12px; color: #666;');
