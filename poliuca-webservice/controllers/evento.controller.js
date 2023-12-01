
const Evento = require("../models/evento.model");

const eventoController = {};

eventoController.create=async(req,res,next)=>{
  try{const{title,type_event,place,hour,date} = req.body;
   
  const {identifier} = req.params;

         let evento = await Evento.findById(identifier);
         
         if(!evento){
            evento= new Evento();
         }
       
         evento["title"]=title;
         evento["type_event"]=type_event;
         evento["place"]=place;
         evento["hour"]=hour;
         evento["date"]=date;
        

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


module.exports = eventoController;