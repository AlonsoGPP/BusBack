require('dotenv').config();
const express = require("express");
const app=express();
const cors=require("cors")
const moongose =require("mongoose");
const userRouter=require("./routes/UserRoutes")
const choferRouter=require('./routes/ChoferRoutes')
const busRouter=require('./routes/BusRoutes')
const itinerarioRouter=require('./routes/ItinerarioRoutes')
app.use(express.json());
app.use(cors());
app.use("/api/auth", userRouter);
app.use('/api/chofer', choferRouter);
app.use("/api/bus",busRouter);
app.use("/api/itinerario",itinerarioRouter);
const PORT = process.env.PORT;
const dbURI = process.env.DB_URI;
moongose.connect(dbURI).then(function(result){
    console.log('Database conected successfully.');
}).catch((err)=>{console.log(err)})

app.listen(PORT,()=>{
    console.log('Servidor iniciado en el puerto:' + PORT);
})
module.exports=app;