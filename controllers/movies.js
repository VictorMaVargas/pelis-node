const {apiKeyConfig} = require ("../config");

const peli = require ('../utils/peliculas');

const routes = {

    getFilm : async (req,res) => {
        const titulo = req.params.title;
        const data = await peli.getPelicula(`http://www.omdbapi.com/?t=${titulo}&apikey=${apiKeyConfig.apiKey}`)
    
        res.status(200).json(data);
    },
     postFilm: (req,res) =>{ 
        const name = req.body.title
        const message ={message : "Se ha guardado " + name}
        res.status(200).json(message);
    },    
    putFilm: (req,res) =>{ 
        const name = req.body.title
        const message = {id :"0", message : "Se ha actualizado " + name}
        res.status(200).json(message);
    },

    
    deleteFilm:(req,res) =>{ 
        const name = req.body.title
        const message = {id :"0", message : "Se ha borrado " + name}
        res.status(200).json(message);
    }
}

module.exports = routes