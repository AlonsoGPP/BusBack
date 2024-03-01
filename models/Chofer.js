const moongose=require("mongoose");
const Schema=moongose.Schema;

const choferSchema=new Schema({
    _id: { type: moongose.Schema.Types.ObjectId, default: new moongose.Types.ObjectId },
    dni:String,
    nombres:String,
    fechaIngreso:String,
    createdAt:{
        type:Date,
        default:Date.now
    }

});
module.exports={
   choferModel:moongose.model("Choferes", choferSchema),
   choferSchema:choferSchema

}

