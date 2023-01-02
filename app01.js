"use strict";

//PRIMERA VERSIÓN DEL ARCHIVO app

//Para importar funciones o lógica externa al propio archivo se utiliza 'require' igual
//  que si fuera una librería de Node (como 'FileSystme'), sin embargo, es vez de pasar 
//  el identificador del paquete para que Node lo reconozca y lo importe, dado que lo
//  que buscamos es algo hecho por nosotros, debemos de indicar dónde lo v a encontrar,
//  de modo que el argumento de 'require' es la ruta a esa lógica y, lo que devuelve, es
//  un objeto que desestructuramos para disponer de la función directamente:
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs").argv;

console.clear();

//process.argv devuelve un array que contiene los argumentos leídos de una instrucción enviada 
//  por medio de la línea de comandos, por ejemplo, 'node app base=8'. DE ahí que en las líneas
//  siguientes se desestructure ese array para obtener el tercer argumento, donde viene la base
//  para hacer la multiplicación:
// const [ , , arg3 = "base=5" ] = process.argv;
// const [ , base ] = arg3.split("=");

//Lo anterior, sin embargo, se hace más fácil y mejor por medio de 'yargs'.

const base = 5;

// crearArchivo(base)
//     .then( nombreArchivo => console.log(nombreArchivo, " creado") )
//     .catch( err => console.log(err) );

//Yargs
//Se trata de una extensión que permite crear herramientas interactivas de líneas de comandos.
//  Para ello, lo primero que hay que saber hacer es leer las instrucciones que se mandan a 
//  través de la consola y obtener cada uno de sus argumentos. ESto se puede hacer sin 'Yargs',
//  pero no es igual de cómodo.

//Por un lado, prescindiendo de 'Yargs', tenemos la propiedad 'process.argv', la cual devuelve 
//  un arreglo con los argumentos que se envían por la terminal. Así pues, si ejecutamos un 
//  proceso de Node con la siguiente instrucción:
//      $ node process-args.js one two=three four
//La lectura que obtendríamos sería la que se muestra a continuación:
//      0: /usr/local/bin/node
//      1: /Users/mjr/work/node/process-args.js
//      2: one
//      3: two=three
//      4: four
//El primer elemento muestra la ruta en la que está instalado Node, el segundo elemento muestra
//  la ruta en la que se encuentra el fichero que se está ejecutando, y los demás elementos
//  almacenan los argumentos que se escribieron en la terminal.

//Por otro lado, si utilizamos 'Yargs' podemos sacar más provecho de los argumentos enviados en
//  la terminal, pues éstos se nos devuelven en forma de objeto plano, que es más fácil de
//  manejar, y si pasamos argumentos asignados a algún valor en la instrucción, éstos se convetirán
//  en una propiedad del objeto que nos devuelve Yargs, ya que ésta librería es inteligente como
//  para interpretar esos parámetros y hacer la transformación. Es decir, si enviamos: 
//     $ node app --base=5
//Con la propiedad 'process.argv' el array tendría un tercer elemento de tipo string con valor
//  '--base=5':
//      0: "/usr/local/bin/node"
//      1: "/Users/mjr/work/node/process-args.js"
//      2: "--base=5"
//Sin embargo, usando 'Yargs', tendríamos una nueva propiedad del objeto que nos devuelve con valor 5:
//      { _: [], base: 5, '$0': 'app' }

console.log(process.argv); // [ '/usr/bin/node', '/home/breo/Desktop/Node-Udemy/03-bases/app'

console.log(argv); // { _: [], '$0': 'app' }

console.log(argv.base);