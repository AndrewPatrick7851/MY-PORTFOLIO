document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn') || document.querySelector('.menu-btn, .menu-button');
    const navLinks = document.getElementById('nav-links') || document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Toggle active class on BOTH button and menu
            const isActive = menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            navLinks.classList.toggle('is-open');
            menuBtn.setAttribute('aria-expanded', isActive);
        });

        // Close menu when clicking any nav link
        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active', 'is-open');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active', 'is-open');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// ================= AVATAR LIGHTBOX =================
document.addEventListener('DOMContentLoaded', () => {
    const avatarTrigger = document.getElementById('avatarTrigger');
    const lightbox = document.getElementById('avatarLightbox');
    const lightboxClose = document.getElementById('lightboxClose');

    if (avatarTrigger && lightbox && lightboxClose) {
        avatarTrigger.addEventListener('click', () => {
            lightbox.classList.add('active');
        });

        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
            }
        });
    }
});