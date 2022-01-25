const router = require('express').Router();

const ClienteController = require('../controllers/controlClientes');

router.get('/', ClienteController.list);
router.post('/add', ClienteController.save);
router.get('/update/:id', ClienteController.edit);
router.post('/update/:id', ClienteController.update);
router.get('/delete/:id', ClienteController.delete);

module.exports = router;