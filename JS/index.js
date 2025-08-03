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


// Contact form Validation
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const nameInput = form.name;
    const emailInput = form.email;
    const phoneInput = form.phone;
    const messageInput = form.message;

    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const nameError = document.getElementById("name-error");
    const messageError = document.getElementById("message-error");

    // Email regex for typical validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Indian phone regex: 10 digits, start 6-9
    const phoneRegex = /^[6-9]\d{9}$/;

    function showError(inputElem, errorElem, message) {
      errorElem.textContent = message;
      errorElem.classList.add("active");
      inputElem.setAttribute("aria-invalid", "true");
    }

    function clearError(inputElem, errorElem) {
      errorElem.textContent = "";
      errorElem.classList.remove("active");
      inputElem.removeAttribute("aria-invalid");
    }

    function validateName() {
      if (!nameInput.value.trim()) {
        showError(nameInput, nameError, "Please provide your name.");
        return false;
      }
      clearError(nameInput, nameError);
      return true;
    }

    function validateEmail() {
      const val = emailInput.value.trim();
      if (val && !emailRegex.test(val)) {
        showError(emailInput, emailError, "Please enter a valid email address.");
        return false;
      }
      clearError(emailInput, emailError);
      return true;
    }

    function validatePhone() {
      const val = phoneInput.value.trim();
      if (!val) {
        showError(phoneInput, phoneError, "Phone number is required.");
        return false;
      } else if (!phoneRegex.test(val)) {
        showError(phoneInput, phoneError, "Please enter a valid 10-digit Indian phone number.");
        return false;
      }
      clearError(phoneInput, phoneError);
      return true;
    }

    function validateMessage() {
      if (!messageInput.value.trim()) {
        showError(messageInput, messageError, "Please enter a message.");
        return false;
      }
      clearError(messageInput, messageError);
      return true;
    }

    // Validate on blur (optional)
    nameInput.addEventListener("blur", validateName);
    emailInput.addEventListener("blur", validateEmail);
    phoneInput.addEventListener("blur", validatePhone);
    messageInput.addEventListener("blur", validateMessage);

    form.addEventListener("submit", (e) => {
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      const isMessageValid = validateMessage();

      if (!(isNameValid && isEmailValid && isPhoneValid && isMessageValid)) {
        e.preventDefault();
      }
    });
  });



  // Contact Button 
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cta-primary');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Add clicked state class
        button.classList.add('clicked');

        // Remove clicked state after 2 seconds (2000ms)
        setTimeout(() => {
          button.classList.remove('clicked');
        }, 4000);
      });
    });
  });




// Modals
 document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const modal = document.getElementById('thankyou-modal');
  const closeModal = document.getElementById('close-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  function showModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
    closeModal.focus();
  }
  function hideModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  closeModal.onclick = hideModal;
  closeModalBtn.onclick = hideModal;
  window.onclick = function(e) {
    if (e.target === modal) hideModal();
  };
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Enter')) hideModal();
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect the form data
    const formData = new FormData(form);

    // Send form data via fetch POST
    fetch(form.action, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json?.() || response.text();
      })
      .then(() => {
        // Clear form only after successful submission
        form.reset();
        // Show the modal only after data is successfully sent
        showModal();
      })
      .catch(() => {
        alert('There was an error sending your message. Please try again later.');
      });
  });
});
