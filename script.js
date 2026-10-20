// 1. MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });
}


// 2. AUTOMATIC FOOTER YEAR

const yearElements = document.querySelectorAll("#year");

yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
});


// 3. CONTACT FORM DEMO

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#fullName").value.trim();
        const message = document.querySelector("#formMessage");

        message.textContent =
            "Thank you, " + name +
            "! Your demo inquiry is ready. " +
            "This form does not send data online yet.";

        contactForm.reset();
    });
}
