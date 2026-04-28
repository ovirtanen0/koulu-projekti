navbar = document.getElementById("navbar");
navbarOpen = document.getElementById("navbarOpen");
navbarClose = document.getElementById("navbarClose");
darken = document.getElementById("darken");

function navbarVisible() {
    navbar.style.visibility = "visible"
    darken.style.visibility = "visible"
};

function navbarHidden() {
    navbar.style.visibility = "hidden"
    darken.style.visibility = "hidden"
};

navbarOpen.addEventListener("click", navbarVisible);
navbarClose.addEventListener("click", navbarHidden);