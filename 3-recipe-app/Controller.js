import Meal from './Meal.js';

const $hamb = document.querySelector('.hamb'),
    $nav = document.querySelector('nav'),
    $logo = document.querySelector('.logo'),
    $searchSVG = document.querySelector('.search-div .icon'),
    /**
     * @type {HTMLInputElement}
     */
    $searchBar = document.querySelector('input#searchbar'),
    $categoryList = document.querySelector('nav ul'),
    $favContainer = document.querySelector('.fav-container'),
    $mealsContainer = document.querySelector('#meals-div');

window.$hamb = $hamb;

export default class Control {
    constructor() {
        $searchSVG.addEventListener('click', () => {
            $logo.classList.toggle('hide');
            $searchBar.classList.toggle('active');
            $searchBar.focus()
        });

        $hamb.addEventListener('click', () => {
            $hamb.classList.toggle('active');
            $nav.classList.toggle('active');
        });

        $favContainer.addEventListener('wheel', e => {
            e.preventDefault();
            $favContainer.scrollBy({ left: e.deltaY < 0 ? -30 : 30 })
        });

        $searchBar.addEventListener('input', e => {
            let meals = Array.from(JSON.parse(localStorage.getItem('meals')));
            let data = meals.filter((meal) => (meal.strMeal.toLowerCase().includes(e.target.value)));
            this.listMeals(data)
        });
    }

    /**
     * 
     * @param {*} arr
     */
    async setFavorites(arr) {
        for (let meal of arr) {
            meal = new Meal(meal);

            const favItem = document.createElement('div');
            favItem.classList.add('fav-item');

            const favImg = document.createElement('img');
            favImg.setAttribute('src', `${meal.thumb}/preview`);
            favImg.setAttribute('height', '100%');

            const textDiv = document.createElement('div');
            textDiv.innerHTML = meal.name;

            favItem.appendChild(favImg);
            favItem.appendChild(textDiv);

            $favContainer.appendChild(favItem)
        }
    }

    /**
     * @param {Object[]} categories - categories array
     */
    async setCategories(categories) {
        let i = 0;
        for (let category of categories) {
            if (category['strCategory'] === 'Vegan' || category['strCategory'] === 'Vegetarian')
                continue;

            let button = document.createElement('button');
            button.innerHTML = category['strCategory'];
            button.setAttribute('onclick', 'getMealsByCategory(this.innerHTML); $hamb.click()')

            let li = document.createElement('li');
            li.appendChild(button);

            $categoryList.appendChild(li);
        }
    }

    /**
     * @param {Object[]} data - an array of meal objects
     */
    listMeals(data) {
        $mealsContainer.innerHTML = '';

        for (let meal of data) {
            meal = new Meal(meal);

            let mealDiv = document.createElement('div');
            mealDiv.classList.add('meal');

            let mealThumb = document.createElement('img');
            mealThumb.setAttribute('src', `${meal.thumb}/preview`);
            mealThumb.setAttribute('height', '100%');
            mealThumb.classList.add('meal-image');

            let mealName = document.createElement('p');
            mealName.classList.add('meal-name');
            mealName.innerHTML = meal.name;

            mealDiv.appendChild(mealThumb);
            mealDiv.appendChild(mealName);

            $mealsContainer.appendChild(mealDiv);
        }
    }
}