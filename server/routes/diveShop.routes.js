const diveShopController = require('../controllers/diveShop.controller');

module.exports = (app) => {
    app.post('/api/product', diveShopController.createProduct);
    app.get('/api/products', diveShopController.getAllProducts);
    app.get('/api/products/:id', diveShopController.getOneProduct);
    app.patch('/api/products/:id', diveShopController.updateProduct);
    app.delete('/api/products/:id', diveShopController.deleteProduct);
};