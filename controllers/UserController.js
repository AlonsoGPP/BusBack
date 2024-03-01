const userService=require('../services/UserService')
const userControler={

getAllUsers: async(req, res)=>{
    try{
        const users=await userService.getAllUsers();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Error al obtener todos los usuarios"})
    }
},

createUser: async(req, res)=>{
    const userData=req.body;
    try{
        const newUser=await userService.createUser(userData);
        res.status(201).json(newUser);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Error al crear nuevo user"});
    }

},
auntenticateUser: async(req,res)=>{
    const {email, password}=req.body;
  
    try{
        const user=await userService.authenticateUser(email,password);
        if(user){
            const token = userService.generateToken(user);
            res.status(200).json({success:true, message:"Succesfully authentification",  token:token });
        }else{
            throw new Error("Nombre de usuario o contraseña incorrectos")
        }
    }catch(err){
        res.status(401).json({ success: false, message: err.message });
    }

},
deleteUser: async(req,res)=>{
    const {id}=req.params;
    try{
        const deletedUser= await userService.deleteUser(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User no encontrado' });
          }
      
          return res.status(200).json({ message: 'User eliminado exitosamente' });
    }catch(err){
        console.error('Error al eliminar User:', err);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
},
updateUser:async(req,res)=>{
    const {id}=req.params;
    const userData=req.body;
    try{
        const updatedUser= await userService.updateUser( id, userData);
        if(!updatedUser){
            return res.status(404).json({ message: 'User no encontrado' });
        }else{
            res.status(201).json(updatedUser);
        }
    }catch(err){
        console.error('Error al actualizar User:', err);
        return res.status(500).json({ message: 'Error interno del servidor: '+ err });
    }
},
existDni: async(req,res)=>{
    const {dni}=req.params;
    try{
        const exist = await userService.existDni(dni);
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
existUsername: async(req,res)=>{
    const {username}=req.params;
    try{
        const exist = await userService.existeUsername(username);
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
module.exports=userControler;