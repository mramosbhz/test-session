exports.get = (req, res, next) => {
    res.status(200).send({
        session: req.session.name
    });
};

exports.post = (req, res, next) => {
    req.session.name = 'Marco'
    res.status(201).send({
        status: 'Ok',
        message: 'Session gravada com sucesso',
        value: req.session.name
    });
};