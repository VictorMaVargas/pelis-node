const fetch = require('node-fetch');

const peliculas = {
    getPelicula: async (url) => {
            let res = await fetch (url)
            let film = await res.json()
        
            return film
    }

}


module.exports = peliculas