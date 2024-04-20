/*================== toggle icon navbar ==================*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = ()=>{
/*================== Remove toggle icon and navbar when click navbar link(scroll) ==================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
