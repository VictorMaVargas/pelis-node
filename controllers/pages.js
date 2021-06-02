import {apiKeyConfig} from "./config.js"

const pages = {

    home: (req, res) => {
        let datos = {
            título: "película"
        }
        res.status(200).render("home", datos)
    },
    film: (req, res) => {
        res.status(200).render("film")
    },

}
module.exports = pages