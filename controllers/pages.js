const pages = {
    home:(req, res) => {
        res.status(200).render('home')
    },


    film:(req, res) => {
        res.status(200).render('film')
    },


}



module.exports = pages
