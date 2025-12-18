// =================================================
// BOFFO Agency - JavaScript
// =================================================

const translations = {
    'nav.creators': { sv: 'KREATÖRER', en: 'CREATORS' },
    'nav.about': { sv: 'OM OSS', en: 'ABOUT US' },
    'nav.apply': { sv: 'ANSÖK NU', en: 'APPLY NOW' },
    'nav.contact': { sv: 'KONTAKTA OSS', en: 'CONTACT' },
    'nav.login': { sv: 'LOGGA IN', en: 'LOG IN' },
    'audience.title': { sv: 'Välj din väg', en: 'Choose your path' },
    'audience.subtitle': {
        sv: 'Är du kreatör eller ett företag som söker influencer-marknadsföring?',
        en: 'Are you a creator, or a company looking for influencer marketing?'
    },
    'audience.tab.creators': { sv: 'Jag är kreatör', en: "I'm a creator" },
    'audience.tab.companies': { sv: 'För företag', en: 'For companies' },
    'audience.creators.money': { sv: 'Tjäna pengar på din kreativitet', en: 'Earn money on your creativity' },
    'audience.creators.caption': {
        sv: 'Gör ditt inflytande till inkomst – varumärken betalar för innehåll som träffar rätt.',
        en: 'Turn your influence into income — brands pay for content that connects.'
    },
    'audience.creators.apply': { sv: 'Ansök till vårt team nu', en: 'Apply to our team now' },
    'audience.creators.applyCaption': {
        sv: 'Gå med i PUSH IT och matchas med betalda kampanjer som passar din stil.',
        en: 'Join PUSH IT and get matched with paid campaigns that fit your style.'
    },
    'audience.companies.get': {
        sv: 'Hitta rätt influencer och marknadsför dina produkter',
        en: 'Get your influencer and market your products'
    },
    'audience.companies.contact': {
        sv: 'Kontakta oss för mer info',
        en: 'Contact us for information'
    },
    'creator.view': { sv: 'Visa profil', en: 'View profile' },
    'creator.seeAll': { sv: 'Se alla våra kreatörer', en: 'See all our creators' },
    'sponsors.title': { sv: 'SPONSORER', en: 'SPONSORS' },
    'sponsors.subtitle': { sv: 'Varumärken vi samarbetat med', en: 'Brands we’ve partnered with' },
    'sponsors.aria': { sv: 'Sponsorer loggor i loop', en: 'Sponsors logo loop' },
    'collabs.title': { sv: 'SAMARBETEN', en: 'COLLABORATIONS' },
    'collabs.subtitle': {
        sv: 'Våra senaste samarbeten med våra PUSH IT-kreatörer',
        en: 'Our latest partnerships with our talented PUSH IT creators'
    },
    'clients.title': { sv: 'VÅRA KUNDER', en: 'OUR CLIENTS' },
    'clients.subtitle': { sv: 'Våra senaste partners', en: 'Our latest partners' },
    'clients.alt': { sv: 'Kundlogotyp', en: 'Client logo' },
    'what.title': { sv: 'DET VI GÖR', en: 'WHAT WE DO' },
    'what.body': {
        sv: 'PUSH IT är en dedikerad byrå som uteslutande representerar svenska influencers inom mode, inredning, skönhet och sport. Vi säkerställer högt engagemang och innehåll av toppkvalitet.',
        en: 'PUSH IT is a dedicated agency that exclusively represents Swedish influencers in fashion, interior design, beauty, and sports. We ensure high engagement and top-quality content.'
    },
    'what.cta': { sv: 'Om oss', en: 'About us' },
    'services.1.title': { sv: 'Stöttande management & community', en: 'Supportive Management & Community' },
    'services.1.desc': {
        sv: 'PUSH IT erbjuder dagligt stöd, månatliga uppdateringar och starka relationer för att växa ditt varumärke och koppla ihop dig med kunder för långsiktig framgång.',
        en: 'PUSH IT offers daily support, monthly updates, and strong relationships to grow your brand and connect you with clients for lasting success.'
    },
    'services.2.title': { sv: 'Struktur', en: 'Structure' },
    'services.2.desc': {
        sv: 'Vår personliga plattform håller samarbeten, deadlines och avtal i ordning så att du kan fokusera på kreativiteten.',
        en: 'Our personalized platform keeps your collaborations, deadlines, and agreements organized, letting you focus on creativity.'
    },
    'services.3.title': { sv: 'Brett nätverk', en: 'Wide Network' },
    'services.3.desc': {
        sv: 'PUSH IT kopplar ihop dig med ledande kunder inom mode, sport, skönhet, inredning och mat, och breddar dina möjligheter till samarbeten.',
        en: 'PUSH IT connects you with top clients in fashion, sport, beauty, interior, and food, expanding your opportunities for collaborations.'
    },
    'newsletter.title': { sv: 'Nyhetsbrev', en: 'Newsletter' },
    'newsletter.placeholder': { sv: 'Din e-postadress', en: 'Your email address' },
    'newsletter.button': { sv: 'Prenumerera', en: 'Subscribe' },
    'newsletter.loading': { sv: 'Prenumererar...', en: 'Subscribing...' },
    'newsletter.error': { sv: 'Ange en giltig e-postadress', en: 'Please enter a valid email address' },
    'newsletter.success': { sv: 'Tack för din prenumeration!', en: 'Thank you for subscribing!' },
    'footer.powered': { sv: 'Drivs av', en: 'Powered by' },
    'footer.privacy': { sv: 'Integritet & Cookies', en: 'Privacy & Cookies' }
};

let currentLanguage = 'sv';

function translate(key, fallback = '') {
    const entry = translations[key];
    if (!entry) return fallback;
    return entry[currentLanguage] || entry.sv || entry.en || fallback;
}

document.addEventListener('DOMContentLoaded', function () {

    // Video Playlist - Sequential Playback
    initVideoPlaylist();

    // Audience Selector (Creators / Companies)
    initAudienceSelector();

    // Creators Marquee (Mobile)
    initCreatorsMarquee();

    // Language Toggle (sv/en)
    initLanguageToggle();

    // Mobile Menu Toggle
    initMobileMenu();

    // Scroll Animations
    initScrollAnimations();

    // Newsletter Form
    initNewsletterForm();

    // Header Scroll Effect
    initHeaderScroll();

});

function initCreatorsMarquee() {
    const creatorsSection = document.querySelector('.creators');
    const creatorsGrid = document.querySelector('.creators .creators-grid');

    if (!creatorsSection || !creatorsGrid) return;

    const mediaQuery = window.matchMedia('(max-width: 768px)');

    function enable() {
        if (creatorsSection.dataset.marqueeEnabled === 'true') return;

        const items = Array.from(creatorsGrid.children);
        if (!items.length) return;

        const clones = items.map((item) => {
            const clone = item.cloneNode(true);
            clone.dataset.marqueeClone = 'true';
            clone.classList.remove('visible');
            clone.classList.remove('fade-in-scroll');
            return clone;
        });

        clones.forEach(clone => creatorsGrid.appendChild(clone));
        creatorsSection.classList.add('is-marquee');
        creatorsSection.dataset.marqueeEnabled = 'true';
    }

    function disable() {
        if (creatorsSection.dataset.marqueeEnabled !== 'true') return;
        creatorsSection.classList.remove('is-marquee');
        creatorsSection.dataset.marqueeEnabled = 'false';

        creatorsGrid.querySelectorAll('[data-marquee-clone="true"]').forEach(el => el.remove());
    }

    function update() {
        if (mediaQuery.matches) enable();
        else disable();
    }

    update();

    if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', update);
    } else {
        mediaQuery.addListener(update);
    }
}

function initLanguageToggle() {
    const toggle = document.querySelector('.lang-toggle');
    const buttons = document.querySelectorAll('.lang-btn');
    if (!toggle || !buttons.length) return;

    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('pushit-lang') : null;
    if (saved === 'en' || saved === 'sv') {
        setLanguage(saved, false);
    } else {
        applyTranslations();
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang, true));
    });
}

function setLanguage(lang, persist = true) {
    currentLanguage = lang === 'en' ? 'en' : 'sv';

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.dataset.lang === currentLanguage;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });

    applyTranslations();

    if (persist && typeof window !== 'undefined') {
        window.localStorage.setItem('pushit-lang', currentLanguage);
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const value = translate(key, el.textContent);
        if (value) {
            el.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const value = translate(key, el.getAttribute('placeholder') || '');
        if (value) {
            el.setAttribute('placeholder', value);
        }
    });

    document.querySelectorAll('[data-i18n-label]').forEach(el => {
        const key = el.dataset.i18nLabel;
        const value = translate(key, el.getAttribute('aria-label') || '');
        if (value) {
            el.setAttribute('aria-label', value);
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.dataset.i18nAlt;
        const value = translate(key, el.getAttribute('alt') || '');
        if (value) {
            el.setAttribute('alt', value);
        }
    });

    const newsletterButton = document.querySelector('.newsletter-submit');
    if (newsletterButton) {
        newsletterButton.textContent = translate('newsletter.button', newsletterButton.textContent);
    }
}

function initAudienceSelector() {
    const tabs = Array.from(document.querySelectorAll('.audience-tab'));
    const panels = Array.from(document.querySelectorAll('[data-audience-panel]'));

    if (!tabs.length || !panels.length) return;

    function setActive(audience) {
        tabs.forEach(tab => {
            const isActive = tab.dataset.audience === audience;
            tab.classList.toggle('is-active', isActive);
            tab.setAttribute('aria-selected', String(isActive));
            tab.tabIndex = isActive ? 0 : -1;
        });

        panels.forEach(panel => {
            const isActive = panel.dataset.audiencePanel === audience;
            panel.classList.toggle('is-active', isActive);
            panel.hidden = !isActive;
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => setActive(tab.dataset.audience));
        tab.addEventListener('keydown', (e) => {
            if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
            e.preventDefault();

            const currentIndex = tabs.indexOf(tab);
            const nextIndex = e.key === 'ArrowRight'
                ? (currentIndex + 1) % tabs.length
                : (currentIndex - 1 + tabs.length) % tabs.length;

            tabs[nextIndex].focus();
            setActive(tabs[nextIndex].dataset.audience);
        });
    });

    const defaultTab = tabs.find(t => t.classList.contains('is-active')) || tabs[0];
    setActive(defaultTab.dataset.audience);
}

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
            showMessage(emailInput, translate('newsletter.error'), 'error');
            return;
        }

        // Disable button during submission
        submitButton.disabled = true;
        submitButton.textContent = translate('newsletter.loading');

        // Simulate API call (replace with actual API endpoint)
        setTimeout(() => {
            showMessage(emailInput, translate('newsletter.success'), 'success');
            emailInput.value = '';
            submitButton.disabled = false;
            submitButton.textContent = translate('newsletter.button');
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
        color: ${type === 'error' ? '#F28266' : '#ACC39A'};
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
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
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
