const tokenService = require('../services/token');

exports.verifyUsuario = async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(404).send({
            message: 'No token'
        });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.rol == 'Administrador' || response.rol == 'Vendedor' || response.rol == 'Almacenero') {
        next();
    } else {
        return res.status(403).send({
            message: 'No autorizado'
        });
    }
}
exports.verifyAdministrador = async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(404).send({ message: 'No token' });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.rol == 'Administrador') {
        next();
    } else {
        return res.status(403).send({ message: 'No autorizado' });
    }
}
exports.verifyAlmacenero = async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(404).send({
            message: 'No token'
        });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.rol == 'Administrador' || response.rol == 'Almacenero') {
        next();
    } else {
        return res.status(403).send({
            message: 'No autorizado'
        });
    }
}
exports.verifyVendedor = async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(404).send({
            message: 'No token'
        });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.rol == 'Administrador' || response.rol == 'Vendedor') {
        next();
    } else {
        return res.status(403).send({
            message: 'No autorizado'
        });
    }
}
