const ProductController = require("./../controllers/product.controller");
module.exports = (app)=> {
    app.post("/api/createproduct", ProductController.createProduct)

}