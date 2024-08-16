const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach((faqBox) => {
    // const chevronIcon = faqBox.querySelector(".chevron-icon");

    // chevronIcon.addEventListener("click", () => {
    //     faqBoxes.forEach((item) => {
    //         if (item !== faqBox) {
    //             item.classList.remove("show-answer");
    //         }
    //     });

    //     faqBox.classList.toggle("show-answer");
    // });


    faqBox.addEventListener("click", () => {
       faqBoxes.forEach((item) => {
         if(item !== faqBox){
            item.classList.remove("show-answer")
         }
       })

       faqBox.classList.toggle("show-answer")
    })
});
