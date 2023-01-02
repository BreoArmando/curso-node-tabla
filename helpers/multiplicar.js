"use strict";

//Node permite acceder al sistema de archivos del ordenador con JavaScript, cosa que
//  por supuesto, en el navegador no se puede hacer. Para ello, Node dispone del módulo
//  'FileSystem'.
//Para hacer uso de ese módulo, se debe importar como sigue (en la página de Node se 
//  pueden consultar todos los módulos disponibles para importar, así como documentación
//  sobre los métodos y demás, en función de la versión de Node):
const fs = require("fs");
const colors = require("colors");

//Hacer que una función devuelva una promesa es mejor (o por lo menos gusta más al profesor)
//  indicando 'async' en sus parámetros que escribiendo el retorno de una nueva promesa.
//En la definición siguiente se utiliza 'async':
const crearArchivo = async(base = 5, iteraciones = 10, listar = false) => 
{
    let fichero, consola = "";

    try 
    {
        for (let i = 1; i <= iteraciones; i++) 
        {
            let resultado = base * i;

            fichero += `${base} x ${i} = ${resultado}\n`;
            consola += `${colors.yellow(base)} x ${colors.blue(i)} = ${colors.gray.underline(resultado)}\n`;
        }

        if (listar)
        {
            console.log("===================");
            console.log("= TABLA DEL ", base, " =");
            console.log("===================");

            console.log(consola);
            
            console.log(`Archivo 'tabla-${base}.txt' creado!`);
        }

        fs.writeFile(`./salida/tabla-${base}.txt`, fichero, (err) => 
        {
            if (err) 
                throw err;

        });

        return `tabla-${base}.txt`;
    } 
    catch (error) 
    {
        throw error
    }
}

//Y aquí, se retorna una promesa (faltaría el tratamiento del error con la callback 'reject'):
// const crearArchivo = (base) =>
// {
//     return new Promise( (resolve, reject) => 
//     {
//         console.log("===================");
//         console.log("= TABLA DEL ", base, " =");
//         console.log("===================");
    
//         let salida = "";
    
//         for (let i = 1; i <= 10; i++) 
//         {
//             let resultado = base * i;
//             salida += `${base} x ${i} = ${resultado}\n`;
//         }

//         fs.writeFile(`tabla-${base}.txt`, salida, (err) => 
//         {
//             if (err) 
//                 throw err;

//             //console.log(`Archivo 'tabla-${base}.txt' creado!`);
//         });

//         resolve(`tabla-${base}.txt`);
//     } )
// }

//Para exportar la función 'crearArchivo' no se puede escribir directamente 'export' sobre
//  su declaración como se podría en ES6 puro, ya que Node no lo permite. En su lugar, lo
//  que se debe hacer es utilizar el objeto global 'module' para exportar lo que se necesite
//  de la siguiente manera:
module.exports = 
{
    crearArchivo
}