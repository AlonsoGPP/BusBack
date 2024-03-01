const mongoose=require("mongoose");
const {choferSchema}=require('./Chofer');

const Schema=mongoose.Schema;

const pasajeroSchema=new Schema({
    dni:String,
    nombres:String
})
const asientoSchema= new Schema({
    correlativo: {type:Number},
    pasajero:{
        type:pasajeroSchema
        
    }

})
const busSchema=new Schema({
    placa:String,
    modelo:String,
    marca:String,
    foto:String,
    chofer:{
        type:choferSchema
        },
    asientos:[
        {
           type:asientoSchema,
           required:true
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

});
module.exports = {
    busModel: mongoose.model("Buses", busSchema),
    busSchema: busSchema
};
