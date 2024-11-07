const express = require('express')
const app = express()
const router = require('./routes/productsRoutes.js')
const notFoundMiddleware = require('./Middleware/notFoundMiddleware.js')
const logger = require('./Middleware/loggerMiddleware.js')
app.use(express.json())
const productController = require('./Controllers/productController.js')
const host = 'http://127.0.0.1';
const port = 3010;

app.listen(port, () => {
    console.log(`Use this link ${host}:${port}`)
});

app.use('/products', logger)

app.get('/', productController.index)

app.use('/products', router)

app.use(notFoundMiddleware)

/* app.use('/products', (req,res,next) => {
    throw new Error('This is a custom error)')
}) */

app.use((err, req, res, next) => {

    console.error(err.stack)

    res.status(500).json({
        status : 500,
        error:'You broke everything'})
})