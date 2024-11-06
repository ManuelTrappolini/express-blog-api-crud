const express = require('express')
const app = express()
const host = 'http://127.0.0.1';
const port = 3003;
const productController = require('./Controllers/productController')
app.listen(port, (req,res) => {
    console.log(`Use this link ${host}:${port}`)
});

app.get('/', productController.index)
app.get('/:id', productController.show)