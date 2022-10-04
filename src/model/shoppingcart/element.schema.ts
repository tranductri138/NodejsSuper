import * as mongoose from "mongoose";

 const ProductSchema = new mongoose.Schema({
    name : {
        type: String ,
        required : true ,
    },
    flour : {
        type: Boolean ,
        required : false , 
        default : true
    } ,
    quantity : {
        type: Number ,
        required : true ,
    }
});

export const Product = mongoose.model("product" , ProductSchema , 'product');

