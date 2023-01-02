"use strict";

//TERCERA VERSIÓN DEL ARCHIVO app

//Importaciones
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

//Se crea la tabla de multiplicar sobre un nuevo fichero .txt
crearArchivo( argv.base, argv.listar )
    .then( nombreArchivo => console.log(nombreArchivo, " creado") )
    .catch( err => console.log(err) );

console.log("Base: ", argv.base);
console.log("Listar: ", argv.listar);
