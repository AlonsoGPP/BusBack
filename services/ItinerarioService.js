const ItinerarioModel=require('../models/Itinerario');
const itinerarioService={
    getAllItinerario: async ()=>{
        return await ItinerarioModel.find();
    },
    createItinerario: async(itinerario)=>{
        return await ItinerarioModel.create(itinerario);
    },
    deleteItinerario: async(id)=>{
        return await ItinerarioModel.findByIdAndDelete(id);
    },
    updateItinerario: async(id, itinerario)=>{
        return await ItinerarioModel.findByIdAndUpdate(id, itinerario, {new:true})
    }
}
module.exports=itinerarioService;