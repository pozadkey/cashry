const {Router} = require ('express'),
router = Router()
cashRoute = require('../controllers/cashController')

router.post('/add', cashRoute.addItem)
router.post('/update', cashRoute.updateItem)
router.get('/edit', cashRoute.editItem)
router.delete('/delete', cashRoute.deleteItem)