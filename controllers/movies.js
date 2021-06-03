const {apiKeyConfig} = require ("../config");
const apiKey = process.env.apiKey || apiKeyConfig.apiKey
const peli = require ('../utils/peliculas');

const routes = {

    getFilm : async (req,res) => {
        const titulo = req.params.title;
        const data = await peli.getPelicula(`http://www.omdbapi.com/?t=${titulo}&apikey=${apiKey}`)
    
        res.status(200).json(data);
    },
     postFilm: async (req,res) =>{ 
        console.log(req.body);//construir JSON a la hora de hacer el POST
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