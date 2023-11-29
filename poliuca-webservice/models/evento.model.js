const Moongose = require("mongoose");
const Scheme = Moongose.Schema;

const EventoSchema = new Scheme({
tile:{
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
date:{
    type:Date,
},
hidden:{
    type:Boolean,
    default:false
}
},{timiestamps:true});

module.export = Moongose.model("Evento",EventoSchema);