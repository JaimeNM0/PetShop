document.getElementById("toggleBtn").addEventListener("click", function () {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    var menu = document.querySelector(".menu");
    menu.classList.toggle("active");
});