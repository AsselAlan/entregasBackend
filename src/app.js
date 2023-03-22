import express from "express";
import mongoose from "mongoose";
import productRouter from './routers/product.router.js'

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const connectMongoDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://Alan:coderpassword@dbalan.jbczsh1.mongodb.net/ecommerce")
        console.log("Conectado con exito a la DB");
    } catch (error) {
        console.error("No se pudo conectar a la DB: " + error);
        process.exit()
    }
}

connectMongoDB()
app.listen(port, ()=>{
    console.log("Server ON in port: "+port);
})

app.use("/api/products", productRouter)