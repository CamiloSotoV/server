const router = require('express').Router();
const categoriaController = require('../controllers/CategoriaController');
const auth = require('../middlewares/auth');

router.post('/add', auth.verifyAlmacenero, categoriaController.add);
router.get('/query', auth.verifyAlmacenero, categoriaController.query);
router.get('/list/:valor?', auth.verifyAlmacenero, categoriaController.list);
router.put('/update', auth.verifyAlmacenero, categoriaController.update);
router.delete('/remove/:id', auth.verifyAlmacenero, categoriaController.remove);
router.put('/activate', auth.verifyAlmacenero, categoriaController.activate);
router.put('/deactivate', auth.verifyAlmacenero, categoriaController.deactivate);

module.exports = router;