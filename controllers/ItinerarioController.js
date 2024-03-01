const itinerarioService=require('../services/ItinerarioService');
const itinerarioController={
    getAllItinerario: async(req, res)=>{
        try{
            const itinerarios=await itinerarioService.getAllItinerario();
            res.status(200).json(itinerarios);
        }catch(err){
            console.log(err);
            res.status(500).json({error:"Error al obtener todos los Itinerarios"});
        }
    },
    createItinerario: async(req, res)=>{
        const itinerariodata=req.body;
        try{
            const newItinerario=await itinerarioService.createItinerario(itinerariodata);
            res.status(201).json(newItinerario);
        }catch(err){
            console.log(err);
            res.status(500).json({error:"Error al crear nuevo Itinerario"});
        }
    
    },
    deleteItinerario: async(req,res)=>{
        const {id}=req.params;
        try{
            const deletedItinerario= await itinerarioService.deleteItinerario(id);
            if (!deletedItinerario) {
                return res.status(404).json({ message: 'Itinerario no encontrado' });
              }
          
              return res.status(200).json({ message: 'Itinerario eliminado exitosamente' });
        }catch(err){
            console.error('Error al eliminar Bus:', err);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    },
    updateItinerario:async(req,res)=>{
        const {id}=req.params;
        const itinerarioData=req.body;
        try{
            const updatedItinerio= await itinerarioService.updateItinerario( id, itinerarioData)
            if(!updatedItinerio){
                return res.status(404).json({ message: 'Itinerario no encontrado' });
            }else{
                res.status(201).json(updatedItinerio);
            }
        }catch(err){
            console.error('Error al actualizar Itinerario:', err);
            return res.status(500).json({ message: 'Error interno del servidor: '+ err });
        }
    }
}
module.exports=itinerarioController;