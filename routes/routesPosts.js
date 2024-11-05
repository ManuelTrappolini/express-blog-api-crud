const express = require('express');
const router = express.Router();
const postControllers = require('../Controllers/post.js')

router.get('/', postControllers.index)
router.post('/', postControllers.store)


module.exports = router