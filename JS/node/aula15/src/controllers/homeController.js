exports.paginaInicial = (req, res, next) => {
    req.session.usuario = { nome: 'Augusto', logado: true };
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};