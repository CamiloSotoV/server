const router = require('express').Router();
const ventaController = require('../controllers/VentaController');
const auth = require('../middlewares/auth');

router.post('/add', auth.verifyVendedor, ventaController.add);
router.get('/query', auth.verifyVendedor, ventaController.query);
router.get('/list', auth.verifyVendedor, ventaController.list);
router.put('/activate', auth.verifyVendedor, ventaController.activate);
router.put('/deactivate', auth.verifyVendedor, ventaController.deactivate);

module.exports = router;