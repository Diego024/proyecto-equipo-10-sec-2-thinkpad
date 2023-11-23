const Moongose = require("mongoose");
const Scheme = Moongose.schema;

const typeSchema = new Scheme({id:{},name:{}});
const exerciseSchema = new Scheme({name:{}});

const RutinaSchema = new Scheme({
name:{},
discipline:{},
type:[typeSchema],
exercise:[exerciseSchema]
},{timiestamps:true});

module.export = Moongose.model("Rutina",RutinaSchema);