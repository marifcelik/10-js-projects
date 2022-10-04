import Controller from './Controller.js';
import Fetcher from './Fetcher.js';
import Meal from './Meal.js';

const hamb = document.querySelector('.hamb');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const searchSVG = document.querySelector('.search-div .icon');
const searchBar = document.querySelector('input#searchbar');
const categoryList = document.querySelector('nav ul');

const controller = new Controller();
const fetcher = new Fetcher();

let categories = await fetcher.fetchCategories();
controller.setCategories(categories);

/**
 * its takes category name from innerHTML 
 * @param {String} name 
 */
window.getMealsByCategory = async function (name) {
    let data = await fetcher.fetchMealsByCategory(name)
    console.log(data)

    controller.listMeals(data)
}
/* 
let details = await fetcher.fetchMealDetailsById(52895)
console.log(details['meals'][0]) */