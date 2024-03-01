const moongose=require("mongoose");
const Schema=moongose.Schema;

const userSchema=new Schema({
    username:String,
    email:String,
    dni:String,
    nombres:String,
    rol:String,
    password:String,
    createdAt:{
        type:Date,
        default:Date.now
    }

});
module.exports=moongose.model("Users", userSchema);
