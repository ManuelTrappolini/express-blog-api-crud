const express = require('express')
const app = express()
const router = require('./routes/productsRoutes.js')
const host = 'http://127.0.0.1';
const port = 3010;
app.use(express.json())
const productController = require('./Controllers/productController.js')
app.listen(port, () => {
    console.log(`Use this link ${host}:${port}`)
});

app.get('/', productController.index)

app.use('/product', router)