
const Evento = require("../models/evento.model");

const eventoController = {};

eventoController.create=async(req,res,next)=>{
 const{title,type_event,place,hour,date} = req.body;
    try{
        const evento = new Evento({
            title:title,
            type_event:type_event,
            place:place,
            hour:hour,
            date:date
        });

     const eventoSaved =  await evento.save();
     if(!eventoSaved){
        return res.status(409).json({error:"Error al crear"});
     }
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}



eventoController.findAll= async(req,res,next)=>{
    try{
       
        const evento = await  Evento.findAll({hidden:false});
        
        return res.status(200).json({evento});
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

eventoController.findById=()=>{
    
}

module.exports = eventoController;