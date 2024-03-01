const mongoose=require("mongoose");
const {busSchema}=require('./Bus')
const Schema=mongoose.Schema;



const itinerarioSchema=new Schema({
    
    fecha:Date,
    
    buses:[
        {
            type:busSchema,
           required:true
        }
    ],
    
    createdAt:{
        type:Date,
        default:Date.now
    }

});
module.exports=mongoose.model("Itinerarios", itinerarioSchema);
