// Add custom JavaScript here

document.addEventListener("DOMContentLoaded",onUserScroll)

function onUserScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll',()=>{
        if (window.scrollY > 60) {
            navbar.classList.add('bg-dark')
            navbar.classList.add('navbar-sticky')
        }else {
            navbar.classList.remove('bg-dark')
            navbar.classList.remove('navbar-sticky')
        }
    })
}