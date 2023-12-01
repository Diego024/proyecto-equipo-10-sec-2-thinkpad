const Equipo = require("../models/equipo.model");
const httpError = require("http-errors");

const equipoController={};

equipoController.create= async(req,res,next)=>{
    try{ const{name,create_date,players,sport} = req.body;
    const {identifier} = req.params;

    let equipo = await Equipo.findById(identifier);
    
    if(!equipo){
        equipo= new Equipo();
    }

    equipo["name"] =name;
    equipo["create_date"] = create_date;
    equipo["players"] =players;
    equipo["sport"] =sport;
       

     const equipoSaved =  await equipo.save();
     if(!equipoSaved){
        return res.status(409).json({error:"Error al crear"});
     }
     res.status(201).json({message: "Equipo creado",data:equipoSaved})
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

equipoController.findAll= async(req,res,next)=>{
    try{
       
        const equipo = await  Equipo.find({hidden:false});
        
        return res.status(200).json({equipo});
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

equipoController.finOneById= async(req,res,next)=>{
    try{
       const{identifier} = req.params;

       const equipo = await Equipo.findById(identifier);
        
       if(!equipo){
          return res.status(404).json({error:"Equipo no definido"});
       }

        return res.status(200).json(equipo);
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

equipoController.deleteById = async (req,res,next)=>{
    try{
           const {identifier} = req.params;

           const equipo = await Equipo.findByIdAndDelete(identifier);
           if(!equipo){
            return res.status(404).json({error:"Equipo not found"});
           }
           return res.status(200).json({message:"Equipo eliminado"})
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

equipoController.updateEquip = async (req,res,next)=>{
    try {
        const{identifier} = req.params;
        const{body} = req;
        const toUpdateEquipo = await Equipo.findById(identifier);
        if(!toUpdateEquipo)throw httpError(404,"Equipo not found");
        const  updateEquipo = await Equipo.findByIdAndUpdate(identifier,body,{
            new:true,
        })
        if(!updateEquipo)throw httpError(500,"Equipo no actualizado");
        res.status(200).json({message:"Equipo actualizado",data:updateEquipo});
    } catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

module.exports = equipoController;