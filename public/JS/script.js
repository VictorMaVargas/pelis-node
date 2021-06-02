import { apiKeyConfig } from "../config.js"

const fetch = require('node-fetch');

document.getElementById("boton").addEventListener("click", function(){

    let titulo = document.getElementById("search").value

    fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=${(apiKeyConfig)}`)
    .then(res=>res.json())
    .then(data=>console.log(data))

});