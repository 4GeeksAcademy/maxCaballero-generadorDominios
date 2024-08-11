/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

window.onload = function() {
  //write your code here
  var boton = document.getElementById("listado");
  boton.addEventListener("click", dominios);

  function dominios() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "bacoon"];
    let exten = ["com", "net", "io", "gov"];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < exten.length; l++) {
            let lista = pronoun[i] + adj[j] + noun[k] + "." + exten[l];
            console.log(lista);
          }
        }
      }
    }
  }
  var final = dominios();

  console.log("Hello Rigo from the console!");
};
