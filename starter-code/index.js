document.addEventListener("DOMContentLoaded", function () {
    const exploreButton = document.querySelector(".explore-button");
    const hamburgerOpenButton = document.querySelector(".hamburger-button.open");
    const hamburgerCloseButton = document.querySelector(".hamburger-button.close");

    if (exploreButton && hamburgerOpenButton && hamburgerCloseButton) {
        exploreButton.addEventListener("click", function () {
            window.location.href = "destination.html";
        });
        hamburgerOpenButton.addEventListener("click", function () {

            document.querySelector(".mobile-nav-links").classList.add("active");

        });
        hamburgerCloseButton.addEventListener("click", function () {
            document.querySelector(".mobile-nav-links").classList.remove("active");

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

