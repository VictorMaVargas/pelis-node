//import { apiKeyConfig } from "../config.js"

document.getElementById("boton").addEventListener("click", function(){

    let titulo = document.getElementById("search").value
    let informacion = {
        titulo: titulo
    }
    console.log(informacion);
    let opciones = {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(informacion)
    }
    console.log(opciones);
    fetch("http://localhost:3000/film",opciones);

});