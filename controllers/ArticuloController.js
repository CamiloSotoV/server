const models = require('../models');

exports.add = async (req, res, next) => {
    try {
        const reg = await models.Articulo.create(req.body);
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
        const reg = await models.Articulo.findOne({ _id: req.params.id })
            .populate('categoria', { nombre: 1 });
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
exports.queryCodigo = async (req, res, next) => {
    try {
        const reg = await models.Articulo.findOne({ codigo: req.query.codigo })
            .populate('categoria', { nombre: 1 });
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
        const reg = await models.Articulo.find({ $or: [{ 'nombre': new RegExp(valor, 'i') }, { 'codigo': new RegExp(valor, 'i') }, { 'descripcion': new RegExp(valor, 'i') }] }, { createdAt: 0 })
            .populate('categoria', { nombre: 1 })
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
        console.log(req.body)
        const reg = await models.Articulo.findByIdAndUpdate({ _id: req.body._id }, { categoria: req.body.categoria, codigo: req.body.codigo, nombre: req.body.nombre, descripcion: req.body.descripcion, precio_venta: req.body.precio_venta, stock: req.body.stock });
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
        const reg = await models.Articulo.findByIdAndDelete({ _id: req.params.id });
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
        const reg = await models.Articulo.findByIdAndUpdate({ _id: req.body._id }, { estado: 1 });
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
        const reg = await models.Articulo.findByIdAndUpdate({ _id: req.body._id }, { estado: 0 });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}

