const Moongose = require("mongoose");
const Scheme = Moongose.Schema;

const SportSchema = new Scheme({name:{type:String}});


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
    type:Date,
    //required:true
},
height:{
    type: Number,
    //required:true
},
weight:{
    type: Number,
    //required:true,
},
email:{
    type:String
},
hidden:{
    type:Boolean,
    default:false,
}
},{timestamps:true});

module.exports = Moongose.model("Deportista",DeportistaSchema);