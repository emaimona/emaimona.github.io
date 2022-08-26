const navMenu = document.getElementById("main-nav")
const navOpen = document.getElementById("nav-open")
const navClose = document.getElementById("nav-close")


navOpen.addEventListener('click',  ()=>{
    navMenu.classList.add("show-menu")
})


navClose.addEventListener('click', ()=>{
    navMenu.classList.remove("show-menu")
})


// REMOVE MENU ON CLICK =================>
const navLink = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("main-nav")
    navMenu.classList.remove("show-menu")
}

navLink.forEach((link)=> link.addEventListener('click', linkAction))