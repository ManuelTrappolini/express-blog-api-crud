const express = require('express');
const router = express.Router();
const postControllers = require('../Controllers/post.js')

router.get('/', postControllers.index)
router.post('/', postControllers.store)
router.get('/:id', postControllers.show)
router.patch('/:id', postControllers.update)


module.exports = router