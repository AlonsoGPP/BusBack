const {busModel}=require('../models/Bus');
const busService={
    getAllBuses: async ()=>{
        return await busModel.find();
    },
    createBus: async(bus)=>{
        return await busModel.create(bus);
    },
    deleteBus: async(id)=>{
        return await busModel.findByIdAndDelete(id);
    },
    updateBus: async(id, bus)=>{
        return await busModel.findByIdAndUpdate(id, bus, {new:true});
    },
    existsLicensePlate: async(placa)=>{
        const bus= await busModel.findOne({placa:placa});
        if(bus!=null){
            return true;
        }else{
            return false;
        }
    }
}
module.exports=busService;