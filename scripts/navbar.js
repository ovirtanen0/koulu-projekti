navbar = document.getElementById("navbar");
navbarOpen = document.getElementById("navbarOpen");
navbarClose = document.getElementById("navbarClose");

navbarOpen.addEventListener("click", () => {
    navbar.style.right = "0";
    navbar.style.boxShadow = "0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .25)";
});

navbarClose.addEventListener("click", () => {
    navbar.style.right = "-350px";
    navbar.style.boxShadow = "none";
});