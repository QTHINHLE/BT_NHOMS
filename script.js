document.addEventListener("DOMContentLoaded", function () {
    // Hiệu ứng typing
    const words = ["Front-End Developer", "UI/UX Designer", "Tech Ka ka ka ka"];
    let i = 0, j = 0, currentWord = "", isDeleting = false;
    const typingElement = document.querySelector(".typing");

    function typeEffect() {
        currentWord = words[i];
        if (isDeleting) {
            j--;
        } else {
            j++;
        }

        typingElement.textContent = currentWord.substring(0, j);

        if (!isDeleting && j === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 100 : 200);
        }
    }

    typeEffect();

    // Hiệu ứng fade-in khi cuộn
    const fadeIns = document.querySelectorAll(".fade-in");

    function handleScroll() {
        fadeIns.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Hiệu ứng đổi màu navbar khi cuộn
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
