const router = require('express').Router();
const articuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');
router.post('/add', auth.verifyAlmacenero, articuloController.add);
router.get('/query/:id', auth.verifyAlmacenero, articuloController.query);
router.get('/queryCodigo', auth.verifyUsuario, articuloController.queryCodigo);
router.get('/list/:valor?', auth.verifyAlmacenero, articuloController.list);
router.put('/update', auth.verifyAlmacenero, articuloController.update);
router.delete('/remove/:id', auth.verifyAlmacenero, articuloController.remove);
router.put('/activate', auth.verifyAlmacenero, articuloController.activate);
router.put('/deactivate', auth.verifyAlmacenero, articuloController.deactivate);

module.exports = router;