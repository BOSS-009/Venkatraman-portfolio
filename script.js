document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");

    // Change nav link color on hover
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#FFD700";
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "white";
        });
    });

    // Dropdown toggle for mobile support
    dropdown.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownContent.classList.toggle("show");
    });

    document.addEventListener("click", function () {
        dropdownContent.classList.remove("show");
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
