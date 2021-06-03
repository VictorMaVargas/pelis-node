const {apiKeyConfig} = require ("../config.js");
//const {apiKey} = require ("../config");
//import {apiKeyConfig} from "./config.js"; 
const fetch = require("node-fetch");

const pages = {
  home: (req, res) => {
    let datos = {
      título: "película",
    };
    res.status(200).render("home", datos);
  },
  film: (req, res) => {
    let titulo = req.params.title;
    fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=${apiKeyConfig.apiKey}`)
    .then(res=>res.json())
    .then(data => {
        //console.log(data);
        res.status(200).render("film", {'data':data})
    })
    .catch (e => console.error(e))
    //console.log(response);
    
  },
  form: (req, res) => {
    console.log(req.body.titulo);
    const url = `film/${req.body.titulo}`
    console.log(url);
    res.redirect(url);
  },
};
module.exports = pages;

//(`http://www.omdbapi.com/?t=${titulo}&apikey=3265fadd`)
