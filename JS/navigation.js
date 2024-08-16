const mobileNavigation = document.querySelector(".mobile-nav-menu");
const closeIcon = document.querySelector("#close-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
    mobileNavigation.classList.add("active");
});


closeIcon.addEventListener("click", () => {
    mobileNavigation.classList.remove("active");
});

document.addEventListener("click", (event) => {
    const isClickInsideMenu = mobileNavigation.contains(event.target);
    const isClickOnHamburger = hamburgerMenu.contains(event.target);

    if (!isClickInsideMenu && !isClickOnHamburger) {
        mobileNavigation.classList.remove("active");
    }
});





