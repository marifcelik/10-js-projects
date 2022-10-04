export default class Meal {
    #id;
    #name;
    #thumb;

    constructor(obj) {
        this.#id = obj['idMeal'];
        this.#thumb = obj['strMealThumb'];
        this.#name = obj['strMeal'];
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get thumb() {
        return this.#thumb;
    }

    set thumb(thumb) {
        this.#thumb = thumb;
    }
}