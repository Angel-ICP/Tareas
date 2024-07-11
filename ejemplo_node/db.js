const e = require('express')
const mysql = require('mysql')

const connection =
mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gestion_proveedores'
})

connection.connect((err) =>{
    if(err){
        console.error("error al conectar a la base de datos" + err.stack);
        return;
    }
    console.log("conectado a la base de datos como id" + connection.threadId)
})
module.exports = connection