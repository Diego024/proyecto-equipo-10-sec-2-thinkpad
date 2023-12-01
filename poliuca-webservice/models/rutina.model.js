const Moongose = require("mongoose");
const Scheme = Moongose.Schema;

//const typeSchema = new Scheme({id:{type:Number},name:{type:String}});

const exerciseSchema = new Scheme({name:{type:String}});

const RutinaSchema = new Scheme({
name:{
    type:String,
    trim:true,
    requerid:true
},
discipline:{
    type:String,
    trim:true
},
//type:[typeSchema],
tipo:{
    type:String,
    requerid:true
},
exercise:[exerciseSchema],
hidden:{
    type:Boolean,
    default:false
}
},{timestamps:true});

module.exports = Moongose.model("Rutina",RutinaSchema);