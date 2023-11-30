const Ejercicio = require("../models/ejercicio.model");

const ejercicioController = {};

ejercicioController.create=async(req,res,next)=>{
 
    try{
        const{name,grupo_muscular,imagen,equipo} = req.body;
        const ejercicio = new Ejercicio({
            name:name,
            grupo_muscular:grupo_muscular,
            imagen:imagen,
            equipo:equipo
        });

     const ejercicioSaved =  await ejercicio.save();
     if(!ejercicioSaved){
        return res.status(409).json({error:"Error al crear"});
     }
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}



ejercicioController.findAll= async(req,res,next)=>{
    try{
       
        const ejercicio = await  Ejercicio.find({hidden:false});
        
        return res.status(200).json({ejercicio});
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

ejercicioController.finOneById= async(req,res,next)=>{
    try{
       const{identifier} = req.params;

       const post = await Ejercicio.findById(identifier);
        
       if(!ejercicio){
          return res.status(404).json({error:"Ejercicio no definido"});
       }

        return res.status(200).json(ejercicio);
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}



module.exports = ejercicioController;