let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

searchBtn.onclick = () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
}

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
formBtn.onclick = () =>{
    loginForm.classList.toggle('active');
}
formClose.onclick = () =>{
    loginForm.classList.remove('active');
}

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
       1024: {
            slidesPerView: 3,
        },
    },
});
