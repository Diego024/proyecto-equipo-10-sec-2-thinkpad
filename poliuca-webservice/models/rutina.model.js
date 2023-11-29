const Moongose = require("mongoose");
const Scheme = Moongose.Schema;

//const typeSchema = new Scheme({id:{type:Number},name:{type:String}});

const exerciseSchema = new Scheme({id:{type:Number},name:{type:String}});

const RutinaSchema = new Scheme({
name:{
    type:String,
    trim:true
},
discipline:{
    type:String,
    trim:true
},
//type:[typeSchema],
tipo:{
    id:{type:Number},
    name_tipo:{type:String}
},
exercise:[exerciseSchema],
hidden:{
    type:Boolean,
    default:false
}
},{timiestamps:true});

module.export = Moongose.model("Rutina",RutinaSchema);