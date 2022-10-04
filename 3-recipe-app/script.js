import Controller from './Controller.js';
import Fetcher from './Fetcher.js';

const controller = new Controller();
const fetcher = new Fetcher();

let categories = await fetcher.fetchCategories();
controller.setCategories(categories);

window.getMealsByCategory = async function (name) {
    let data = await fetcher.fetchMealsByCategory(name)
    console.log(data)

    controller.listMeals(data)
}