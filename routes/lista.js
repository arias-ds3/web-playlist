router.get('/', (req, res) => {
    res.render('lista', { canciones });
});

router.post('/', (req, res) => {
    const { titulo, artistita, duracion } = req.body;

    // Verificar duplicidad
    const duplicada = canciones.some(
        (cancion) =>
            cancion.titulo === titulo &&
            cancion.artistita === artistita &&
            cancion.duracion === duracion
    );

    if (duplicada) {
        return res.status(400).send('La canción ya existe.');
    }

    canciones.push({ titulo, artistita, duracion });
    res.redirect('/canciones');
});

module.exports = router;