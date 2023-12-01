const Rutina = require("../models/rutina.model");

const rutinaController ={};

rutinaController.create=async(req,res,next)=>{
 const{name,discipline,tipo,exercise} = req.body;
    try{
        const rutina = new Rutina({
            name:name,
            discipline:discipline,
            tipo:tipo,
            exercise:exercise
        });

     const rutinaSaved =  await rutina.save();
     if(!rutinaSaved){
        return res.status(409).json({error:"Error al crear"});
     }
     res.status(201).json({message: "Rutina creado",data:rutinaSaved});
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}



rutinaController.findAll= async(req,res,next)=>{
    try{
       
        const rutina = await  Rutina.findAll({hidden:false});
        
        return res.status(200).json({rutina});
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

rutinaController.finOneById= async(req,res,next)=>{
    try{
       const{identifier} = req.params;

       const rutina = await Rutina.findById(identifier);
        
       if(!rutina){
          return res.status(404).json({error:"Ejercicio no definido"});
       }

        return res.status(200).json(rutina);
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

module.exports = rutinaController;