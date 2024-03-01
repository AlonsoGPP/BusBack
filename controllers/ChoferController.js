const choferService=require('../services/ChoferService');
const choferController={
    getAllChoferes: async(req, res)=>{
        try{
            const choferes=await choferService.getAllChoferes();
            res.status(200).json(choferes);
        }catch(err){
            console.log(err);
            res.status(500).json({error:"Error al obtener todos los choferes"});
        }
    },
    createChofer: async(req, res)=>{
        const choferData=req.body;
        try{
            const newchofer=await choferService.createChofer(choferData);
            res.status(201).json(newchofer);
        }catch(err){
            console.log(err);
            res.status(500).jsom({error:"Error al crear nuevo chofer"});
        }
    
    },
    deleteChofer: async(req,res)=>{
        const {id}=req.params;
        try{
            const deletedChofer= await choferService.deleteChofer(id);
            if (!deletedChofer) {
                return res.status(404).json({ message: 'Chofer no encontrado' });
              }
          
              return res.status(200).json({ message: 'Chofer eliminado exitosamente' });
        }catch(err){
            console.error('Error al eliminar chofer:', err);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    },
    findById: async(req, res)=>{
        try{
            const {id}=req.params
            const chofer=await choferService.getById(id);
            res.status(200).json(chofer);
        }catch(err){
            console.log(err);
            res.status(500).json({error:"Error al obtener chofer"});
        }
    },
    updateChofer:async(req,res)=>{
        const {id}=req.params;
        const choferData=req.body;
        try{
            const updatedChofer= await choferService.updateChofer( id, choferData)
            
            if(!updatedChofer){
                
                return res.status(404).json({ message: 'chofer no encontrado' });
            }else{
                res.status(201).json(updatedChofer);
            }
        }catch(err){
            console.error('Error al actualizar chofer:', err);
            return res.status(500).json({ message: 'Error interno del servidor: '+ err });
        }
    },
    existDni: async(req,res)=>{
        const {dni}=req.params;
        try{
            const exist = await choferService.existDni(dni);
            if(exist){
                res.status(200).json(true);
            }else{
                res.status(200).json(false);
            }
        }catch(err){
            console.error('Error en la busqueda:', err);
            return res.status(500).json({ message: 'Error interno del servidor: '+ err });
        }
    }
}
module.exports=choferController;