const express= require("express");
const router = express.Router();
const verifyToken=require('../Middlewares/authenticateToken')
const {
    createChofer,
    getAllChoferes,
    deleteChofer,
    findById,
    updateChofer,
    existDni
}=require('../controllers/ChoferController')
router.get("/",verifyToken, getAllChoferes).post("/",verifyToken, createChofer).delete("/:id",verifyToken,deleteChofer).get("/:id",verifyToken,findById).put("/:id",verifyToken,updateChofer)
.get("/existe-dni/:dni",verifyToken, existDni);
module.exports=router;