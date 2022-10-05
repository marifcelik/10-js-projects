import Meal from './Meal.js';

window.$hamb = document.querySelector('.hamb');
const $nav = document.querySelector('nav');
const $logo = document.querySelector('.logo');
const $searchSVG = document.querySelector('.search-div .icon');
const $searchBar = document.querySelector('input#searchbar');
const $categoryList = document.querySelector('nav ul');
const $favContainer = document.querySelector('.fav-container');
const $mealsContainer = document.querySelector('#meals-div');

export default class Control {
    constructor() {
        $searchSVG.addEventListener('click', () => {
            $logo.classList.toggle('hide');
            $searchBar.classList.toggle('active');
        });

        $hamb.addEventListener('click', () => {
            $hamb.classList.toggle('active');
            $nav.classList.toggle('active');
        });

        $favContainer.addEventListener('wheel', e => {
            e.preventDefault();
            $favContainer.scrollBy({ left: e.deltaY < 0 ? -30 : 30 })
        });
    }

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

    async setCategories(categories) {
        let i = 0;
        for (let category of categories) {
            if (category['strCategory'] === 'Vegan' || category['strCategory'] === 'Vegetarian')
                continue;

            let button = document.createElement('button');
            button.innerHTML = category['strCategory'];
            button.id = `category-${i++}`;
            button.setAttribute('onclick', 'getMealsByCategory(this.innerHTML); $hamb.click()')

            let li = document.createElement('li');
            li.appendChild(button);

            $categoryList.appendChild(li);
        }
    }

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