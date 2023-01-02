"use strict";

//SEGUNDA VERSIÓN DEL ARCHIVO app

//Importaciones
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs")
    .option("b", 
    {
        alias: "base",
        type: "number",
        demandOption: true
    })
    .option("l", 
    {
        alias: "listar",
        type: "boolean",
        demandOption: true,
        default: false
    })
    .check( (argv, options) => 
    {
        if( isNaN( argv.b ) )
            throw "La base tiene que ser un número."

        return true;
    })
    .argv;

console.clear();

//Se crea la tabla de multiplicar sobre un nuevo fichero .txt
crearArchivo( argv.base, argv.listar )
    .then( nombreArchivo => console.log(nombreArchivo, " creado") )
    .catch( err => console.log(err) );

console.log("Base: ", argv.base);
console.log("Listar: ", argv.listar);
