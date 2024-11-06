const products = require('../data/db.js')

const index = (req,res) =>{
    res.json({
        data : products,
    counter : products.length
})
    }

    const show = (req,res) =>{
        const product = products.find(product => product.id === Number(req.params.id))
        if(!product){
            return res.status(404).json({
                error: `the product with id ${req.params.id} doesn't exist`
            })
        }
         return res.status(201).json({
            data:product
        })
    }


module.exports = {
    index,
    show
}

