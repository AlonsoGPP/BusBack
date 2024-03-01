const {choferModel}=require('../models/Chofer');
const choferService={
getAllChoferes: async()=>{
    return await choferModel.find();
},
createChofer: async(chofer)=>{
    return await choferModel.create(chofer);
},
deleteChofer: async(id)=>{
    return await choferModel.findByIdAndDelete(id);
},
getById: async(id)=>{
    return await choferModel.findById(id);
},
updateChofer: async(id, chofer)=>{
    return await choferModel.findByIdAndUpdate(id, chofer, {new:true});
},
existDni: async (dni)=>{
    
    const user = await choferModel.findOne({dni:dni});
 
    if(user!=null){
        return true;
    }else{
        return false;
    }
}
}
module.exports=choferService;