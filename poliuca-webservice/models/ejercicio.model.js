const {Schema,model} = require("mongoose");


const EjercicioSchema = new Schema({
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
   // required:true,
},
equipo:{
    type:String,
    trim:true,
    required:true,
},
hidden:{
    type:Boolean,
    default:false
}
},{timestamps:true});

module.exports = model("Ejercicio",EjercicioSchema);