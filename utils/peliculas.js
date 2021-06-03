const fetch = require('node-fetch');

const peliculas = {
    getPelicula: async (url) => {
            let res = await fetch (url)
            let film = res.json()
            return film
    },
    postPelicula: async(url) => {
        let response = await fetch(url)
        let film = await response.json()
        return film
    },
    putPelicula: async(url) => {
        let response = await fetch(url)
        let film = await response.json()
        return film
    },
    deletePelicula: async(url) => {
        let response = await fetch(url)
        let film = await response.json()
        return film
    }
}


module.exports = peliculas