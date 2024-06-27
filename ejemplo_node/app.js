// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configurar archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar motor de plantillas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en http://localhost:${port}`);
});