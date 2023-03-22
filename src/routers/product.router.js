import { Router } from 'express';
//import del service para Students. (Se puede probar con el service del file system o el de mongoose)
//import StudentService from '../services/filesystem/students.service.js';
import ProductService from '../db/product.service.js';

const router = Router();
const productService = new ProductService();

router.get('/',async(req,res)=>{
    try {
        let products = await productService.getProductAll();
        res.send(products);
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo obtener los productos."});
    }
    
})

router.post('/',async(req,res)=>{
    try {
        let products = await productService.getProductAll()
        let id = products.length +1

        
        let result = await productService.newProduct(req.body,id);
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo guardar el producto."});
    }
})

router.get('/:idProduct',async(req,res)=>{
    try {
        let id = req.params.idProduct
        id = Number(id)
        let result = await productService.getProductId(id);
        if(result.length !== 0){
            res.send({result});
        }else{
            res.send({message:`El producto ${id} no existe`})
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo pedir el producto."});
    }
})

router.delete('/:idProduct',async(req,res)=>{  
        try {
            let id = req.params.idProduct
            id = Number(id)

            let product = await productService.getProductId(id);

            if(product.length !== 0){
                let result = await productService.deleteProduct(id);
                res.send({result,message: "Producto elimindo"});
            }else{
                res.status(500).send({message: "El producto no existe."})
            }
        } catch (error) {
            console.error(error);
            res.status(500).send({error:  error, message: "No se pudo eliminar el producto."});
        }
})

router.put('/:idProduct',async(req,res)=>{  
    try {
        let id = req.params.idProduct
        id = Number(id)

        let update = req.body 
        let updateValue = Object.values(update)
        let keyUpdate = Object.keys(update)
    
        let product = await productService.getProductId(id);

        if(product.length !== 0){
            let result = await productService.updateProduct(id,keyUpdate[0], updateValue[0]);
            res.send({result,message: "Producto actualizado"});
        }else{
            res.status(500).send({message: "El producto no existe."})
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo actualizar el producto."});
    }
})



export default router;