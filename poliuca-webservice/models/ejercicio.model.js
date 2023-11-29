const Moongose = require("mongoose");
const Scheme = Moongose.schema;

const EjercicioSchema = new Scheme({
name:{
    type:String,
    trim:true,
    required:true,
},
grupo_muscular:{
    type:String,
    trim:true,
    required:true,
},
imagen:{
    type:String,
    trim:true,
    required:true,},
equipo:{
    type:String,
    trim:true,
    required:true,
},
hidden:{
    type:Boolean,
    default:false
}
},{timiestamps:true});

module.export = Moongose.model("Ejericio",EjercicioSchema);