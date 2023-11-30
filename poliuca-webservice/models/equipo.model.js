const Moongose = require("mongoose");
const Scheme = Moongose.Schema;

const EquipoSchema = new Scheme({
id:{
    type:Number,
    required:true
},
name:{ 
    type: String,
    trim:true,
    required:true
},
create_date:{
    type: Date,
    default: Date.now,
    required:true
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