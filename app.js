const express = require('express');
const app = express();
const path = require('path');

const cancionesRouter = require('./routes/canciones');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/canciones', cancionesRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

