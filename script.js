/* function designed for hamburger menu */
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // will make hyperlink change
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}