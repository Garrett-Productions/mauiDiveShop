const DiveShopSchema = require('../models/diveShop.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((product) => {
            console.log("this is my product", product)
            res.json(product)
        })
        .catch(err => {res.status(400).json(err), console.log(err)}
    );
}

module.exports.getAllProducts = (req,res) => {
    Product.find()
        .then((products) => {
            console.log("All my products", products)
            res.json(products)
        })
        .catch(err => res.json(err))
}

module.exports.getOneProduct = (req,res) => {
    Product.findOne({_id : req.params.id}) 
        .then(product =>{ res.status(201).json(product), console.log(res.statusCode)})
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.updateProduct = (req,res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(product =>{ res.status(201).json(product), console.log(res.statusCode)}) 	 
        .catch(err => {res.status(400).json(err), console.log(err)});
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id:req.params.id})
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json(err))
}