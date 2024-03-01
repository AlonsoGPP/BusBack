const express= require("express");
const router = express.Router();
const verifyToken=require('../Middlewares/authenticateToken')
const {
    createBus,
    deleteBus,
    getAllBuses,
    updateBus,
    existLicensePlate
}=require('../controllers/BusController')
router.get("/",verifyToken, getAllBuses).post("/",verifyToken, createBus).delete("/:id",verifyToken,deleteBus).put("/:id",verifyToken, updateBus)
.get("/existe-placa/:placa",verifyToken, existLicensePlate);
module.exports=router;