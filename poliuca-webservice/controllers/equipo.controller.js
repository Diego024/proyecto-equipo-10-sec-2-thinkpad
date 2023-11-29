const Equipo = require("../models/equipo.model");

const equipoController={};

equipoController.create= async(req,res,next)=>{
    const{id,name,create_date,players,sport} = req.body;
    try{
        const equipo = new Equipo({
            id:id,
            name:name,
            create_date:create_date,
            players:players,
            sport:sport
        });

     const equipoSaved =  await equipo.save();
     if(!equipoSaved){
        return res.status(409).json({error:"Error al crear"});
     }
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

equipoController.findAll= async(req,res,next)=>{
    try{
       
        const equipo = await  Equipo.findAll({hidden:false});
        
        return res.status(200).json({equipo});
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

equipoController.create= async()=>{
    
}

module.exports = equipoController;