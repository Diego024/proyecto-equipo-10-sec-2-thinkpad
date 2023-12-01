const Moongose = require("mongoose");
const Scheme = Moongose.Schema;

const EquipoSchema = new Scheme({
name:{ 
    type: String,
    trim:true,
    required:true
},
create_date:{
    type: Date,
    default: Date.now,
},
players:{
    type: Number,
    default:0
},
sport:{
    type:String
},
hidden:{
    type:Boolean,
    default:false
}
},{timestamps:true});

module.exports = Moongose.model("Equipo",EquipoSchema);