const express = require('express')
const app = express()
const port = 3000
const router = require("./controllers/index")
const routerApi = require('./controllers/routerApi')

app.use("/public",express.static('public'));


app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router)

app.use('/api', routerApi)
app.use('/',router)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })