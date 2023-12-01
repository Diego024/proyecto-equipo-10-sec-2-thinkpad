const Moongose = require("mongoose");
const Scheme = Moongose.Schema;

const EventoSchema = new Scheme({
title:{
    type:String,
    trim:true,
    required:true
},
type_event:{
    type:String,
    trim:true,
},
place:{
    type:String,
    trim:true
},
hour:{
    type:String,
    trim:true
},
date_event:{
    type:Date,
    required:true
},
hidden:{
    type:Boolean,
    default:false
}
},{timestamps:true});

module.exports = Moongose.model("Evento",EventoSchema);