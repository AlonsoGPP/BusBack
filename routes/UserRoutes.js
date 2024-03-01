const express= require("express");
const router = express.Router();
const verifyToken=require('../Middlewares/authenticateToken')
const {
    auntenticateUser,
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    existDni,
    existUsername
}=require('../controllers/UserController')

router.get("/",verifyToken,getAllUsers).post("/",verifyToken ,createUser).delete("/:id",verifyToken,deleteUser).put("/:id",verifyToken,updateUser)
.get("/existe-dni/:dni",verifyToken, existDni).get("/existe-username/:username", verifyToken, existUsername);
router.post("/login", auntenticateUser);
module.exports=router;