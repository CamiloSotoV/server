const models = require('../models');

exports.add = async (req, res, next) => {
    try {
        const reg = await models.Categoria.create(req.body);
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}
exports.query = async (req, res, next) => {
    try {
        const reg = await models.Categoria.findOne({ _id: req.query._id });
        if (!reg) {
            res.status(404).send({
                message: 'El registro no existe'
            });
        } else {
            res.status(200).json(reg);
        }
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}
exports.list = async (req, res, next) => {
    try {
        let valor = req.params.valor;
        const reg = await models.Categoria.find({ $or: [{ 'nombre': new RegExp(valor, 'i') }, { 'descripcion': new RegExp(valor, 'i') }] }, { createdAt: 0 })
            .sort({ 'createdAt': -1 });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}
exports.update = async (req, res, next) => {
    try {
        const reg = await models.Categoria.findByIdAndUpdate({ _id: req.body._id }, { nombre: req.body.nombre, descripcion: req.body.descripcion });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}
exports.remove = async (req, res, next) => {
    try {
        console.log(req.params.id);
        const reg = await models.Categoria.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}
exports.activate = async (req, res, next) => {
    try {
        const reg = await models.Categoria.findByIdAndUpdate({ _id: req.body._id }, { estado: 1 });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}
exports.deactivate = async (req, res, next) => {
    try {
        const reg = await models.Categoria.findByIdAndUpdate({ _id: req.body._id }, { estado: 0 });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}

