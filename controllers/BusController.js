const busService=require('../services/BusService');
const busController={
    getAllBuses: async(req, res)=>{
        try{
            const buses=await busService.getAllBuses();
            res.status(200).json(buses);
        }catch(err){
            console.log(err);
            res.status(500).json({error:"Error al obtener todos los buses"});
        }
    },
    createBus: async(req, res)=>{
        const busData=req.body;
        try{
            const newBus=await busService.createBus(busData);
            res.status(201).json(newBus);
        }catch(err){
            console.log(err);
            res.status(500).json({error:"Error al crear nuevo bus"});
        }
    
    },
    deleteBus: async(req,res)=>{
        const {id}=req.params;
        try{
            const deletedBus= await busService.deleteBus(id);
            if (!deletedBus) {
                return res.status(404).json({ message: 'Bus no encontrado' });
              }
          
              return res.status(200).json({ message: 'Bus eliminado exitosamente' });
        }catch(err){
            console.error('Error al eliminar Bus:', err);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    },
    updateBus:async(req,res)=>{
        const {id}=req.params;
        const busData=req.body;
        try{
            const updatedBus= await busService.updateBus( id, busData)
            if(!updatedBus){
                return res.status(404).json({ message: 'Bus no encontrado' });
            }else{
                res.status(201).json(updatedBus);
            }
        }catch(err){
            console.error('Error al actualizar Bus:', err);
            return res.status(500).json({ message: 'Error interno del servidor: '+ err });
        }
    },
    existLicensePlate: async(req,res)=>{
        const {placa}=req.params;
        try{
            const exist = await busService.existsLicensePlate(placa);
            if(exist){
                res.status(200).json(true);
            }else{
                res.status(200).json(false);
            }
        }catch(err){
            console.error('Error en la busqueda:', err);
            return res.status(500).json({ message: 'Error interno del servidor: '+ err });
        }
    },
}
module.exports=busController;