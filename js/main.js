const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links .nav-item');
const openNav = document.querySelector('.menu-toggler');
const closeNav = document.querySelector('.close-nav');

openNav.addEventListener('click', toggleNav);
closeNav.addEventListener('click', toggleNav);

navLinks.forEach( navItem => navItem.addEventListener('click', toggleNav));

function toggleNav(){
	console.log('clicked');
	nav.classList.toggle('open');
}