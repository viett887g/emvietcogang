let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
function redirectToaccount(){
    window.location.href='search.html';
}
function redirectToaccount1(){
    window.location.href='user.html';
}
function redirectToaccount2(){
    window.location.href='about.html';
}
function redirectToaccount3(){
    window.location.href='review.html';
}
function redirectToaccount4(){
    window.location.href='contact.html';
}

