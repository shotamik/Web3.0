const lines = document.querySelector(".lines");
const xButton = document.querySelector(".x");

lines.onclick = function() {
    const navmobile = document.querySelector(".navmobile");
    navmobile.classList.toggle("active");
    const xButton = document.querySelector(".x");
    xButton.classList.toggle("active");
}


xButton.onclick = function() {
    const navmobile = document.querySelector(".navmobile");
    navmobile.classList.remove("active")
    xButton.classList.remove("active")
}



