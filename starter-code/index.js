document.addEventListener("DOMContentLoaded", function () {
    const exploreButton = document.querySelector(".explore-button");
    const hamburgerOpenButton = document.querySelector(".hamburger-button.open");
    const hamburgerCloseButton = document.querySelector(".hamburger-button.close");

    if (exploreButton && hamburgerOpenButton && hamburgerCloseButton) {
        exploreButton.addEventListener("click", function () {
            window.location.href = "explore.html";
        });
        hamburgerOpenButton.addEventListener("click", function () {
            const navLinks = document.querySelectorAll(".nav-links li:not(.hamburger-button.open)");
            navLinks.forEach((link) => {
                link.style.display = "block";
            });

            hamburgerOpenButton.style.display = "none";

        });
        hamburgerCloseButton.addEventListener("click", function () {
            const navLinks = document.querySelector(".nav-links");
            navLinks.querySelectorAll("li:not(.hamburger-button.open)").forEach((link) => {
                link.style.display = "none";
            });
            const liOpenButton = document.querySelector("li:has(.hamburger-button.open)");
            liOpenButton.style.display = "block";
            hamburgerOpenButton.style.display = "block";
            navLinks.style.height = "auto";
            navLinks.style.width = "auto";

        });
    }


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



});

