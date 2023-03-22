import mongoose from "mongoose";

const productCollection = "products"


const productSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: [true, "Id es requerido"],
        unique: true
    },
    title: {
        type: String,
        index: true,
        require: [true, "Correo es requerido"]
    },
    descripction: {
        type: String,
    },
    code: {
        type: Number,
        require: [true, "Correo es requerido"]
    },
    price: {
        type: Number,
        require: [true, "Correo es requerido"]
    },
    status: {
        type: Boolean,
    },
    stock: {
        type: Number,
        require: [true, "Correo es requerido"]
    },
    category:{
        type: String,
    },
    thumbnails:{
        type: Array,
        default: []
    }
});

export const productModel = mongoose.model(productCollection, productSchema); 