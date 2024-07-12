const express = require('express');
const path = require('path');
const app = express();
const providersRoutes = require('./routes/providers');
const db = require('./db');

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para parsear cuerpos de solicitudes
app.use(express.urlencoded({ extended: true }));

// Usar rutas de proveedores
app.use('/', providersRoutes);

// Escuchar en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Node.js escuchando en http://localhost:${PORT}"`);
});