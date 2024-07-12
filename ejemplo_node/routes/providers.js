const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');

// Ruta para obtener todos los proveedores
router.get('/', providerController.getAllProviders);

// Ruta para añadir un nuevo proveedor
router.post('/add', providerController.addProvider);

// Ruta para editar un proveedor existente
router.post('/edit/:id', providerController.editProvider);

// Ruta para borrar un proveedor
router.get('/delete/:id', providerController.deleteProvider);

module.exports = router;
