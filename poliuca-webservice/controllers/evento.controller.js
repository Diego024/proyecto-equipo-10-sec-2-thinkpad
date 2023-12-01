
const Evento = require("../models/evento.model");
const httpError = require("http-errors");

const eventoController = {};

eventoController.create=async(req,res,next)=>{
  try{const{title,type_event,place,hour,date_event} = req.body;
   
  const {identifier} = req.params;

         let evento = await Evento.findById(identifier);
         
         if(!evento){
            evento= new Evento();
         }
       
         evento["title"]=title;
         evento["type_event"]=type_event;
         evento["place"]=place;
         evento["hour"]=hour;
         evento["date_event"]=date_event;
        

     const eventoSaved =  await evento.save();
     if(!eventoSaved){
        return res.status(409).json({error:"Error al crear"});
     }
     res.status(201).json({message: "Evento creado",data:eventoSaved})
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}



eventoController.findAll= async(req,res,next)=>{
    try{
       
        const evento = await  Evento.find({hidden:false});
        
        return res.status(200).json({evento});
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

eventoController.finOneById= async(req,res,next)=>{
    try{
       const{identifier} = req.params;

       const evento = await Evento.findById(identifier);
        
       if(!evento){
          return res.status(404).json({error:"Evento no definido"});
       }

        return res.status(200).json(evento);
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

eventoController.deleteById = async (req,res,next)=>{
    try{
           const {identifier} = req.params;

           const evento = await Evento.findByIdAndDelete(identifier);
           if(!evento){
            return res.status(404).json({error:"Evento not found"});
           }
           return res.status(200).json({message:"Evento eliminado"})
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

eventoController.updateEquip = async (req,res,next)=>{
    try {
        const{identifier} = req.params;
        const{body} = req;
        const toUpdateEvento = await Evento.findById(identifier);
        if(!toUpdateEvento)throw httpError(404,"Equipo not found");
        const  updateEvento = await Evento.findByIdAndUpdate(identifier,body,{
            new:true,
        })
        if(!updateEvento)throw httpError(500,"Equipo no actualizado");
        res.status(200).json({message:"Equipo actualizado",data:updateEvento});
    } catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

module.exports = eventoController;