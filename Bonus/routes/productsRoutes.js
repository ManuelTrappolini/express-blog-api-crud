const express = require('express')
const router = express.Router()
const productController = require('../Controllers/productController')

router.get('/', productController.index)
router.get('/:id', productController.show)
router.post('/', productController.store)
router.put('/:id', productController.update)

module.exports = router