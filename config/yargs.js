
const argv = require("yargs")
    .option("b", 
    {
        alias: "base",
        type: "number",
        demandOption: true,
        default: 5,
        describe: "Es la base de la tabla de multiplicar."
    })
    .option("l", 
    {
        alias: "listar",
        type: "boolean",
        default: false,
        describe: "Muestra (o no) la tabla en consola."
    })
    .option("h",
    {
        alias: "hasta",
        type: "number",
        default: 10,
        describe: "Límite superior de la tabla."
    })
    .check( (argv, options) => 
    {
        if( isNaN( argv.b ) )
            throw "La base tiene que ser un número."

        return true;
    })
    .argv;

module.exports = argv;