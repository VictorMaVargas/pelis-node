
//import {apiKeyConfig} from "./config.js"
const fetch = require('node-fetch');

const pages = {

    home: (req, res) => {
        let datos = {
            título: "película"
        }
        res.status(200).render("home", datos)
    },
    film: async (req, res) => {

        fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=${(apiKeyConfig)}`)
        .then(res=>res.json())
        .then(datos=>{
            let data={
                peli:datos.title,
            }
    
        }
            )        
    
        res.status(200).render("film")
    },
    form: (req,res)=>{
        
        console.log(req.body);
    }

}
module.exports = pages
