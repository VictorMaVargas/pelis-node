// //import { apiKeyConfig } from "../config.js"

// document.getElementById("boton").addEventListener("click", function(){

//     let titulo = document.getElementById("search").value
//     let informacion = {
//         titulo: titulo
//     }
//     console.log(informacion);
//     let opciones = {
//         method:"POST",
//         headers: {
//             'Content-Type': 'application/json'
//           },
//         body: JSON.stringify(informacion)
//     }
//     console.log(opciones);
//     fetch("http://localhost:3000/film",opciones);

// });

const handlePost = (event) => {
    //Detenemos el comportamiento por defecto
    //i.e. Que se haga el POST desde el formulario
    event.preventDefault();
  
    //Pendiente: Validación de elementos del Formulario...
  
    //Una vez hemos realizado todas las validaciones, 
    //reanudamos el evento original (una petición POST a / film)
    event.target.submit();
  };
  
  
  document
    .querySelector("form")
    //Ponemos el addEventListener a "Submit", no a click
  
    //Como en la función handlePost vamos a necesitar solo el argumento
    //que te da .addEnventListener, no hace falta llamarla aqui debajo
    .addEventListener("submit", handlePost);