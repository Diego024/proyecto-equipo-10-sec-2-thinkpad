const Deportista = require("../models/deportista.model");

const deportistaController={};

deportistaController.create= async(req,res,next)=>{
    const{name,last_name,sports,birth_date,height,weight,email} = req.body;
    try{
        const deportista = new Deportista({
            name:name,
            last_name:last_name,
            sports:sports,
            birth_date:birth_date,
            height:height,
            weight:weight,
            email:email,
        });

     const deportistaSaved =  await deportista.save();
     if(!deportistaSaved){
        return res.status(409).json({error:"Error al crear"});
     }
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}


deportistaController.findAll= async(req,res,next)=>{
    try{
       
        const deportista = await Deportista.findAll({hidden:false});
        
        return res.status(200).json({equipo});
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}


module.exports = deportistaController;
