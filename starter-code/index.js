document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", function () {
            document
                .querySelector(".nav-links a.active")
                .classList.remove("active");
            this.classList.add("active");
            
        });
    });
    // interal navigation, use aria-selected
    document.querySelectorAll(".nav-links button").forEach((button) => {
        button.addEventListener("click", function () {
            document
                .querySelector(".nav-links button[aria-selected='true']")
                .setAttribute("aria-selected", "false");
            this.setAttribute("aria-selected", "true");
        });
    }
    );
    document.querySelectorAll(".dot-indicator").forEach((dot) => {
        dot.addEventListener("click", function () {
            document
                .querySelector(".dot-indicator[aria-selected='true']")
                .setAttribute("aria-selected", "false");
            this.setAttribute("aria-selected", "true");

        });
    }
    );


});

