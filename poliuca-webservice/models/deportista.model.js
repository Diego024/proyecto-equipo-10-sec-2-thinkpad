const Moongose = require("mongoose");
const Scheme = Moongose.schema;

const SportSchema = new Scheme({name:{type:number}});


const DeportistaSchema = new Scheme({
name:{
    type:String,
    trim:true,
    required:true
},
last_name:{
    type:String,
    trim:true,
    required:true
},
sports:[SportSchema],
birth_date:{
    Type:Date,
    required:true
},
height:{
    type: Number,
    required:true,
},
weight:{
    type: Number,
    required:true,
},
email:{
    type:String
},
hidden:{
    type:Boolean,
    default:false,
}
},{timiestamps:true});

module.export = Moongose.model("Deportista",DeportistaSchema);