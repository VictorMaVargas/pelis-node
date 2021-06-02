const fetch = require('node-fetch');

const peliculas = {
    getPelicula: async (url)=>{

        let response = await fetch(url);
        
        let peli= await response.json()
        return peli

    }

}


module.exports = peliculas