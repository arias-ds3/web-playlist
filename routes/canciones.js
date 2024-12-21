const express = require('express');
const router = express.Router();

let canciones = []; // Lista inicial de canciones

// GET /canciones - Mostrar todas las canciones
router.get('/', (req, res) => {
    res.render('lista', { canciones });
});

// GET /canciones/nueva - Mostrar formulario para nueva canción
router.get('/nueva', (req, res) => {
    res.render('nueva'); // Renderizar la vista 'nueva.ejs'
});

// POST /canciones - Agregar una nueva canción
router.post('/', (req, res) => {
    const { titulo, artistita, duracion, url } = req.body;

    // Verificar duplicidad
    const duplicada = canciones.some(cancion =>
        cancion.titulo === titulo &&
        cancion.artistita === artistita &&
        cancion.duracion === duracion &&
        cancion.url === url
    );

    if (duplicada) {
        return res.status(400).send('La canción ya existe.');
    }

    canciones.push({ titulo, artistita, duracion, url });
    res.redirect('/canciones');
});

module.exports = router;

