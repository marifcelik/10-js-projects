export default class Fetcher {

    async fetchCategories() {
        return await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then(res => res.json())
            .then(obj => obj['meals'])
            .catch(err => { throw err })
    }

    async fetchMealsByCategory(name) {
        return await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
            .then(res => res.json())
            .then(obj => obj['meals'])
            .catch(err => { throw err })
    }

    async fetchMealDetailsById(id) {
        return await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(res => res['meals'][0])
            .catch(err => { throw err })
    }
}