//archibo del controlador para proveedores, para especificar cada accion del crud uwu

const { error } = require('jquery')
const db = require('../db.js')

//primero mostrar los registros: Read
exports.getAllProviders = (req,res) =>{
    db.query('SELECT * FROM proveedores', (err, results) =>{
        if(err) throw err;
        res.render('index', {providers: results });
    });
};
