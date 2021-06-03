
const router = require ("express").Router();
const pages = require ("./pages")

router.get('/', pages.home)
router.get('/film/:title', pages.film)

router.post('/film', pages.form)

// router.get('api/film/:title',pages.detalles)
// router.post('api/film/',pages.datos)
// router.put('api/film/',pages.datos2)
// router.delete('api/film/',pages.datos3)
module.exports = router
