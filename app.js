const express = require('express')
const app = express()
const router= require('./controllers/index')
const port = 3000










app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })