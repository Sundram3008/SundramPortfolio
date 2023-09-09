/* Started On 05/sep/2023 Completed on 07/sep/2023 By Sundram Mishra*/
/* function designed for hamburger menu */
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // will make hyperlink change
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}