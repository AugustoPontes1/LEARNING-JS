exports.paginaInicial = (req, res, next) => {
    req.session.usuario = { nome: 'Augusto', logado: true };
    res.render('index', {
        titulo: 'Este será o <span style="color: red;">título</span> da página',
        numero: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};