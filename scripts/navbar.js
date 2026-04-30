navbar = document.getElementById("navbar");
navbarOpen = document.getElementById("navbarOpen");
navbarClose = document.getElementById("navbarClose");


navbarOpen.addEventListener("click", () => {
    navbar.classList.toggle("open");
});

navbarClose.addEventListener("click", () => {
    navbar.classList.toggle("close");
});