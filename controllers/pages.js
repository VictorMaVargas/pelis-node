
//import {apiKeyConfig} from "./config.js"

const pages = {

    home: (req, res) => {
        let datos = {
            título: "película"
        }
        res.status(200).render("home", datos)
    },
    film: async (req, res) => {
       
       let peli = req.params.title
       let data = await info.getMovies(`http://www.omdbapi.com/?t=${titulo}&apikey=${(apiKeyConfig)}`)

        res.status(200).render("film",{data})
    },

}
module.exports = pages
