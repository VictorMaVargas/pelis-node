const router = require ("express").Router();
const pages = require ("./pages")

router.get('/', pages.home)
router.get('/film', pages.film)

module.exports = router