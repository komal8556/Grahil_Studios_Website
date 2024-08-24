// Sticky Header On Scroll
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const headerHeight = header.getBoundingClientRect().height

    if(scrollHeight > headerHeight){
        header.classList.add("fixed-header")
    }else {
        header.classList.remove("fixed-header")
    }
    
})


// Tablet & Mobile navigation 
// (showing or hiding sidebar navigation)
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


// FAQ (showing or hiding answer)
const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach((faqBox) => {
    faqBox.addEventListener("click", () => {
       faqBoxes.forEach((item) => {
         if(item !== faqBox){
            item.classList.remove("show-answer")
         }
       })

       faqBox.classList.toggle("show-answer")
    })
});


// Footer (dymanic) date
const date = document.getElementById("date");
date.innerText = new Date().getFullYear();

