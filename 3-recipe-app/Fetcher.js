export default class Fetcher {

    async fetchCategories() {
        return await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then(res => res.json())
            .then(obj => {
                this.setLocaleStorage(obj['meals']);
                return obj['meals'];
            })
            .catch(err => { throw err })
    }

    async fetchMealsByCategory(name) {
        return await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
            .then(res => res.json())
            .then(obj => {
                this.setLocaleStorage(obj['meals']);
                return obj['meals'];
            })
            .catch(err => { throw err })
    }

    async fetchMealDetailsById(ids) {
        ids = [...ids];
        let arr = [];
        for (const id of ids) {
            arr.push(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(res => res.json())
                .then(res => res['meals'][0])
                .catch(err => { throw err }))
        }
        return arr;
    }

    async fetchRandom(num = 6) {
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(
                await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                    .then(res => res.json())
                    .then(obj => obj['meals'][0])
                    .catch(err => { throw err })
            )
        }
        this.setLocaleStorage(arr);
        return arr;
    }

    /**
     * @param {Object[]} meals - save meals to localstorage for fast searching
     */
    setLocaleStorage(meals) {
        localStorage.clear();
        localStorage.setItem('meals', JSON.stringify(meals));
    }
}