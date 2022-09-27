const hamb = document.querySelector('.hamb');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const searchSVG = document.querySelector('.search-div .icon');
const searchBar = document.querySelector('input#searchbar');

searchSVG.addEventListener('click', () => {
  logo.classList.toggle('hide')
  searchBar.classList.toggle('active')
})

hamb.addEventListener('click', () => {
  hamb.classList.toggle('active');
  nav.classList.toggle('active');
})