//archivo para manejar o controlar las rutas de la aplicacion
const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');


router.get('/', providerController.getAllProviders);

router.post('/add', providerController.addProvider);

router.post('/update/:id', providerController.updateProvider);

router.post('/delete/:id', providerController.deleteProvider);

module.exports = router;

