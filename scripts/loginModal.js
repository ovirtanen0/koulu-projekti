modal = document.getElementById("modallogin");
modalOpen = document.getElementById("modalOpen");
modalClose = document.getElementById("modalClose");

modalOpen.addEventListener("click", () => {
    navbar.style.boxShadow = "0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .25)";
    modal.classList.toggle('open');
    modal.style.borderRadius = "9px";
});

modalClose.addEventListener("click", () => {
    navbar.style.boxShadow = "none";
    modal.classList.toggle('open');
})