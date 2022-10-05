import Controller from './Controller.js';
import Fetcher from './Fetcher.js';

const controller = new Controller();
const fetcher = new Fetcher();

let categories = await fetcher.fetchCategories();
controller.setCategories(categories);

window.getMealsByCategory = async function (name = 'Random') {
    let data = [];
    if (name === 'Random') {
        for (let i = 0; i <= 6; i++)
            data.push(await fetcher.fetchRandom());
    } else
        data = await fetcher.fetchMealsByCategory(name)

    controller.listMeals(data)
}

// init
controller.setFavorites(await fetcher.fetchMealDetailsById([53039, 53016, 52772]));
getMealsByCategory();