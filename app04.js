"use strict";

//CUARTA VERSIÓN DEL ARCHIVO app (PRÁCTICA DEL PAQUETE colors)

//Importaciones
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

require("colors");


console.clear();

//Se crea la tabla de multiplicar sobre un nuevo fichero .txt
crearArchivo( argv.base, argv.hasta, argv.listar )
    .then( nombreArchivo => console.log(nombreArchivo, " creado") )
    .catch( err => console.log(err) );

console.log("Base: ".green, argv.base);
console.log("Listar: ".green, argv.listar);
console.log("Iteraciones: ".green, argv.hasta);
