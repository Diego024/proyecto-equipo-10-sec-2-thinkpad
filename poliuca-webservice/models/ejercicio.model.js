const Moongose = require("mongoose");
const Scheme = Moongose.schema;

const EjercicioSchema = new Scheme({
name:{},
grupo_muscular:{},
imagen:{},
equipo:{}
},{timiestamps:true});

module.export = Moongose.model("Ejericio",EjercicioSchema);