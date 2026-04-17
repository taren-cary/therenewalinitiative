// Import Supabase client functions
import { 
    handleNewsletterSubmit, 
    handleContactSubmit 
} from './supabase-client.js';

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav') && navMenu?.classList.contains('active')) {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    });
    
    // Highlight active page
    highlightActivePage();
}

/**
 * Highlight active page in navigation
 */
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to current page link
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/**
 * Initialize form handlers
 */
function initForms() {
    // Hero newsletter form (Home page)
    const heroNewsletterForm = document.getElementById('hero-newsletter-form');
    if (heroNewsletterForm) {
        heroNewsletterForm.addEventListener('submit', (e) => {
            handleNewsletterSubmit(e, 'home');
        });
    }
    
    // About newsletter form (About page)
    const aboutNewsletterForm = document.getElementById('about-newsletter-form');
    if (aboutNewsletterForm) {
        aboutNewsletterForm.addEventListener('submit', (e) => {
            handleNewsletterSubmit(e, 'about');
        });
    }
    
    // Contact form (Contact page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

/**
 * Add smooth scroll behavior for anchor links
 */
function initSmoothScroll() {
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
}

/**
 * Add scroll effects to navigation
 */
function initScrollEffects() {
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove shadow based on scroll position
        if (currentScroll > 10) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('The Renewal Initiative Website - Initializing...');
    
    // Initialize all modules
    initNavigation();
    initForms();
    initSmoothScroll();
    initScrollEffects();
    
    console.log('Website initialized successfully!');
});

/**
 * Handle page visibility changes
 */
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Re-highlight active page when returning to tab
        highlightActivePage();
    }
});

/**
 * Add fade-in animation for sections on scroll (optional enhancement)
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with animation class
    document.querySelectorAll('.bento-card, .about-content, .contact-grid').forEach(el => {
        observer.observe(el);
    });
}

// Optional: Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Uncomment the line below to enable scroll animations
    // initScrollAnimations();
});

// Export functions for testing purposes
export {
    initNavigation,
    initForms,
    initSmoothScroll,
    initScrollEffects,
    highlightActivePage
};
