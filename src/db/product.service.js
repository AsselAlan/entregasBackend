import { productModel } from "./models/product.model.js";

export default class ProductService {
    constructor() { 
        console.log("Working product with Database persistence in mongodb");
    }

    getProductAll = async () => {
        let products = await productModel.find();
        return products.map(product=>product.toObject());
    }

    newProduct = async (product,id) => {
        product = {...product,id}

        let result = await productModel.create(product);
        return result;
    }

    getProductId = async (id) => {
        let product = await productModel.find({id: id})
        return product
    }

    deleteProduct = async (id) =>{
        let result = await productModel.deleteOne({id: id})
        return result
    }

    updateProduct = async (id,param,valor) =>{
        let result 

        if(param==="title"){
            result = await productModel.updateOne({id: id}, {$set:{title: valor}})
        }
        if(param==="descripction"){
            result = await productModel.updateOne({id: id}, {$set:{descripction: valor}})
        }
        if(param==="code"){
            result = await productModel.updateOne({id: id}, {$set:{code: valor}})
        }
        if(param==="status"){
            result = await productModel.updateOne({id: id}, {$set:{status: valor}})
        }
        if(param==="sotck"){
            result = await productModel.updateOne({id: id}, {$set:{sotck: valor}})
        }
        if(param==="category"){
            result = await productModel.updateOne({id: id}, {$set:{category: valor}})
        }
        if(param==="thumbnails"){
            result = await productModel.updateOne({id: id}, {$set:{thumbnails: valor}})
        }
    
        return result
    }
}