// Footer date
const date = document.getElementById("date");
date.innerText = new Date().getFullYear();

// Stick Header On Scroll
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