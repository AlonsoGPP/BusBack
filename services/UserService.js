require('dotenv').config();
const UserModel=require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET_KEY=process.env.SECRET_KEY;
const EXPIRES_IN=process.env.EXPIRES_IN
exports.getAllUsers=async()=>{
    return await  UserModel.find();
}

exports.createUser= async(user)=>{
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const encryptedUser = { ...user, password: hashedPassword };

    return await UserModel.create(encryptedUser);
}
exports.getUserById=async(id)=>{
    return await UserModel.findById(id);
}
exports.getUserByUsername=async (username)=>{
    return await UserModel.findOne({username:username});
}
exports.authenticateUser=async(email,password)=>{
    const user=await UserModel.findOne({email:email})||await UserModel.findOne({username:email});
        if((user!=null)  && await bcrypt.compare(password, user.password)){
        return user; 
    }else{
        return null;
    }
}
exports.updateUser=async(id, user)=>{
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const encryptedUser = { ...user, password: hashedPassword };
    return await UserModel.findByIdAndUpdate(id, encryptedUser, {new:true});
}
exports.deleteUser=async (id)=>{
return await UserModel.findByIdAndDelete(id);
}
exports.existDni=async (dni)=>{
    
    const user = await UserModel.findOne({dni:dni});
 
    if(user!=null){
        return true;
    }else{
        return false;
    }
}
exports.existeUsername=async (username)=>{
    
    const user = await UserModel.findOne({username:username});
 
    if(user!=null){
        return true;
    }else{
        return false;
    }
}
exports.generateToken=(user)=>{
 const {_id,username,rol}=user;
 const token= jwt.sign({ _id:_id, username:username, rol:rol }, SECRET_KEY, { expiresIn: EXPIRES_IN })
 return token;
}