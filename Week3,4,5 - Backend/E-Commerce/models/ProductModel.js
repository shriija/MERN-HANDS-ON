import {Schema, model} from 'mongoose';

//create product schema (name, brand, price)
const productSchema = new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    price:{
        type:Number,
        required:[true,"product price is required"]
    },
    brand:{
        type:String,
        required:[true,"brand is required"]
    }
},{
    strict:"throw",
    timestamps:true
});
export const ProductModel=model("product",productSchema) // name of the model is "product" which will be pluralised by mongoose