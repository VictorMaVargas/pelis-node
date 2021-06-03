const router = require('express').Router()
const movies = require ('./movies')

router.get('/film/:title', movies.getFilm)
router.post('/film', movies.postFilm)
router.put('/film', movies.putFilm)
router.delete('/film', movies.deleteFilm)



router.all('*', (req,res)=>{
    res.status(404).json({message: "Error 404 - Página no encontrada"}) 
})

module.exports = router