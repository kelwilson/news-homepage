'use strict'

const openMenu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-btn');
const overLay = document.querySelector('.over-lay')
const mobileNav = document.querySelector('.mobile-nav');

openMenu.addEventListener('click', function () {
    mobileNav.classList.toggle('hidden');
    overLay.classList.toggle('hidden');
})

closeMenu.addEventListener('click', function () {
    mobileNav.classList.toggle('hidden');
    overLay.classList.toggle('hidden');
})

overLay.addEventListener('click', function () {
    overLay.classList.add('hidden');
    mobileNav.classList.add('hidden');
})