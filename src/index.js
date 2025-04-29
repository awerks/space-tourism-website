document.addEventListener("DOMContentLoaded", function () {
    const bodyElement = document.body;
    const mobileNav = document.querySelector('.mobile-nav-links');
    const openButton = document.getElementById('hamburger-button-open');
    const closeButton = mobileNav.querySelector('.hamburger-button.close');
    const exploreButton = document.querySelector('.explore-button');

    function openMobileNav() {
        mobileNav.classList.add('active');
        bodyElement.classList.add('no-scroll');
        openButton.setAttribute('aria-expanded', 'true');
    }

    function closeMobileNav() {
        mobileNav.classList.remove('active');
        bodyElement.classList.remove('no-scroll');
        openButton.setAttribute('aria-expanded', 'false');
    }

    openButton.addEventListener('click', openMobileNav);
    closeButton.addEventListener('click', closeMobileNav);

    document.documentElement.addEventListener('click', (event) => {
        const isClickInside = mobileNav.contains(event.target) || openButton.contains(event.target);

        if (!isClickInside && mobileNav.classList.contains('active')) {
            closeMobileNav();
        }
    });
    if (exploreButton) {
        exploreButton.addEventListener('click', function () {
            window.location.href = 'destination.html';
        });
    }
});





