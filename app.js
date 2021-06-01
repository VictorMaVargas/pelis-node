const express = require('express')
const app = express()
const router= require('./controllers/index')
const port = 3000

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/',router);







app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })