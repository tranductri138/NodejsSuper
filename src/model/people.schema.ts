import * as mongoose from "mongoose";

 const BanhBaoSchema = new mongoose.Schema({
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

export const BanhBao = mongoose.model("banhbao" , BanhBaoSchema , 'banhbao');

