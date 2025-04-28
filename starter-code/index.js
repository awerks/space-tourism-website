document.addEventListener("DOMContentLoaded", function () {
    const bodyElement = document.body;
    const mobileNav = document.querySelector('.mobile-nav-links');
    const openButton = document.getElementById('hamburger-button-open');
    const closeButton = mobileNav.querySelector('.hamburger-button.close');

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
});


// document.querySelectorAll(".nav-links a").forEach((link) => {
//     link.addEventListener("click", function () {
//         document
//             .querySelector(".nav-links a.active")
//             .classList.remove("active");
//         this.classList.add("active");

//     });
// });
// // interal navigation, use aria-selected
// document.querySelectorAll(".nav-links button").forEach((button) => {
//     button.addEventListener("click", function () {
//         document
//             .querySelector(".nav-links button[aria-selected='true']")
//             .setAttribute("aria-selected", "false");
//         this.setAttribute("aria-selected", "true");
//     });
// }
// );
// document.querySelectorAll(".dot-indicator").forEach((dot) => {
//     dot.addEventListener("click", function () {
//         document
//             .querySelector(".dot-indicator[aria-selected='true']")
//             .setAttribute("aria-selected", "false");
//         this.setAttribute("aria-selected", "true");

//     });
// }
// );




