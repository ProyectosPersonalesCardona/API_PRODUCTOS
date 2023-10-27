//variable necesaria que requiere promesa para que espere la conexion y no la salte
const pgp = require ('pg-promise')();
//dependencia para variables de entorno
require('dotenv').config();



//credenciales para la conexion con variables de entorno
const user= process.env.USER;
const pass=process.env.PASS;
const host= process.env.HOST;
const database=process.env.DATABASE;


//parametros para conexion de base de datos
const ConectionString= `postgres://${user}:${pass}@${host}:5432/${database}`;


// nos conectamos a pgp para que espere la promesa la conexion
const db =pgp(ConectionString);


//validacion de conexion 
db.connect()
    .then( ()=>{
        console.log('Conexión Exitosa');
    })
        .catch( (err)=>{
    console.log(`Error De Conexion ${err}`);
    });

    
module.exports =db;