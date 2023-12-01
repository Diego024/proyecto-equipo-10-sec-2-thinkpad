const Ejercicio = require("../models/ejercicio.model");
const httpError = require("http-errors");

const ejercicioController = {};

ejercicioController.create=async(req,res,next)=>{
 
    try{
        const{name,grupo_muscular,imagen,equipo} = req.body;
        const {identifier} = req.params;

         let ejercicio = await Ejercicio.findById(identifier);
    
         if(!ejercicio){
           ejercicio = new Ejercicio();
         }
         ejercicio["name"] = name;
         ejercicio["grupo_muscular"]=grupo_muscular;
         ejercicio["imagen"]=imagen;
         ejercicio["equipo"]=equipo;
        

     const ejercicioSaved =  await ejercicio.save();
     console.log(ejercicioSaved)
     if(!ejercicioSaved){
        throw httpError(500,"Ejercicio no creado");
        return res.status(409).json({error:"Error al crear"});
     }

     res.status(201).json({message: "Ejercicio creado",data:ejercicioSaved})
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

       const ejercicio = await Ejercicio.findById(identifier);
        
       if(!ejercicio){
          return res.status(404).json({error:"Ejercicio no definido"});
       }

        return res.status(200).json(ejercicio);
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}

ejercicioController.deleteById = async (req,res,next)=>{
    try{
           const {identifier} = req.params;

           const ejercicio = await Ejercicio.findByIdAndDelete(identifier);
           if(!ejercicio){
            return res.status(404).json({error:"Ejercicio not found"});
           }
           return res.status(200).json({message:"Ejercicio eliminado"})
    }catch(e){
        console.error(e);
        return res.status(500).json({error:"Error interno servidor"});
    }
}


module.exports = ejercicioController;