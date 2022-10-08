import Controller from './Controller.js';
import Fetcher from './Fetcher.js';

const controller = new Controller();
const fetcher = new Fetcher();

window.getMealsByCategory = async (name = 'Random') => {
    let data = [];
    if (name === 'Random')
        data = await fetcher.fetchRandom();
    else
        data = await fetcher.fetchMealsByCategory(name)

    controller.listMeals(data)
}

// init
controller.setCategories(await fetcher.fetchCategories());
controller.setFavorites(await fetcher.fetchMealDetailsById([53039, 53016, 52772, 52891]));

getMealsByCategory();