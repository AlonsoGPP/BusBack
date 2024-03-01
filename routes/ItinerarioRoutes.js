const express= require("express");
const router = express.Router();
const verifyToken=require('../Middlewares/authenticateToken')
const {
    createItinerario,
    deleteItinerario,
    getAllItinerario,
    updateItinerario
}=require('../controllers/ItinerarioController')
router.get("/",verifyToken, getAllItinerario).post("/", verifyToken,createItinerario).delete("/:id",verifyToken,deleteItinerario).put("/:id",verifyToken,updateItinerario);
module.exports=router; 