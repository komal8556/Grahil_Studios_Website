// Scroll animation
// content will be visible as user scroll through website

// Check if the user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    // Only apply animation if reduced motion is NOT preferred
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                entry.target.classList.remove("hidden"); 
            } 
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
} else {
    // If reduced motion is preferred, remove the 'hidden' class from all elements directly
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => el.classList.remove("hidden"));
}
