const products = require('../data/db.js')
const fs = require('fs')

const index = (req, res) => {
    res.json({
        data: products,
        counter: products.length
    })
}

const show = (req, res) => {
    const product = products.find(product => product.id === Number(req.params.id))
    if (!product) {
        return res.status(404).json({
            error: `the product with id ${req.params.id} doesn't exist`
        })
    }
    return res.status(201).json({
        data: product
    })
}

const store = (req, res) => {

    const newProduct = {

        id: Number(products[products.length - 1].id + 1),
        product: req.body.product,
        price: req.body.price,
        brand: req.body.brand,
    }
    products.push(newProduct)

    fs.writeFileSync('./data/db.js', `module.exports = ${JSON.stringify(products, null, 4)}`)

    res.json({
        status: 201,
        data: products,
        counter: products.length
    })
}

const update = (req, res) => {
    const product = products.find(product => product.id === Number(req.params.id))

    if (!product) {
        return res.status(404).json({
            error: `the product with id ${req.params.id} doesn't exist`
        })
    }

        product.product = req.body.product,
        product.price = req.body.price,
        product.brand = req.body.brand,

        fs.writeFileSync('./data/db.js', `module.exports = ${JSON.stringify(products, null, 4)}`)
    return res.json({
        status: 201,
        data: products,
        counter: products.length
    })
}

const destroy = (req,res) => {
    const product = products.find(product => product.id === Number(req.params.id))
    if (!product) {
        return res.status(404).json({
            error: `the product with id ${req.params.id} doesn't exist`
        })
    }
    newProducts = products.filter(product => product.id !== Number(req.params.id))

    fs.writeFileSync('./data/db.js', `module.exports = ${JSON.stringify(newProducts, null, 4)}`)
    
    return res.status(201).json({
        status: 201,
        data: newProducts,
        counter : newProducts.length
    })
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}

