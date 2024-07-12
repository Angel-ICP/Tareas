const db = require('../db');

// Obtener todos los proveedores
exports.getAllProviders = (req, res) => {
    db.query('SELECT * FROM proveedores', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.render('index', { providers: results });
    });
};

// Añadir un proveedor
exports.addProvider = (req, res) => {
    const { name, middleName, lastName, email, phone, address, photo } = req.body;
    const newProvider = { name, middleName, lastName, email, phone, address, photo };
    db.query('INSERT INTO proveedores SET ?', newProvider, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.redirect('/');
    });
};

// Editar un proveedor
exports.editProvider = (req, res) => {
    const { id } = req.params;
    const { name, middleName, lastName, email, phone, address, photo } = req.body;
    const updatedProvider = { name, middleName, lastName, email, phone, address, photo };
    db.query('UPDATE proveedores SET ? WHERE id = ?', [updatedProvider, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.redirect('/');
    });
};

// Borrar un proveedor
exports.deleteProvider = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM proveedores WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.redirect('/');
    });
};
