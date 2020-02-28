const router = require('express').Router();
const ingresoController = require('../controllers/IngresoController');
const auth = require('../middlewares/auth');

router.post('/add', auth.verifyAlmacenero, ingresoController.add);
router.get('/query', auth.verifyAlmacenero, ingresoController.query);
router.get('/list', auth.verifyAlmacenero, ingresoController.list);
router.put('/activate', auth.verifyAlmacenero, ingresoController.activate);
router.put('/deactivate', auth.verifyAlmacenero, ingresoController.deactivate);

module.exports = router;