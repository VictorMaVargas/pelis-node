const fetch = require('node-fetch');

const peliculas = {
    getPelicula: async (url) => {
            let res = await fetch (url)
            let film = res.json()

    }

}


module.exports = peliculas