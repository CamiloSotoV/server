const jwt = require('jsonwebtoken');
const models = require('../models');

async function checkToken(token) {
    let __id = null;
    try {
        const { _id } = await jwt.decode(token);
        __id = _id;
    } catch (e) {
        return false;
    }
    const user = await models.Usuario.findOne({ _id: __id, estado: 1 });
    if (user) {
        const token = jwt.sign({ _id: __id }, 'clavesecretaparagenerartoken', { expiresIn: '1d' });
        return { token, rol: user.rol };
    } else {
        return false;
    }
}

exports.encode = async (_id) => {
    const token = jwt.sign({ _id: _id }, 'clavesecretaparagenerartoken', { expiresIn: '1d' });
    return token;
}
exports.decode = async (token) => {
    try {
        const { _id } = await jwt.verify(token, 'clavesecretaparagenerartoken');
        const user = await models.Usuario.findOne({ _id, estado: 1 });
        if (user) {
            return user;
        } else {
            return false;
        }
    } catch (e) {
        const newToken = await checkToken(token);
        return newToken;
    }
}