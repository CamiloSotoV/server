const router = require('express').Router();
const usuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

router.post('/add', usuarioController.add);
router.get('/query/:id', auth.verifyAdministrador, usuarioController.query);
router.get('/list', auth.verifyAdministrador, usuarioController.list);
router.put('/update', auth.verifyAdministrador, usuarioController.update);
router.delete('/remove', auth.verifyAdministrador, usuarioController.remove);
router.put('/activate', auth.verifyAdministrador, usuarioController.activate);
router.put('/deactivate', auth.verifyAdministrador, usuarioController.deactivate);
router.post('/login', usuarioController.login);

module.exports = router;