const Moongose = require("mongoose");
const Scheme = Moongose.schema;

const EquipoSchema = new Scheme({
id:{},
name:{},
create_date:{},
players:{},
sport:{},
},{timiestamps:true});

module.export = Moongose.model("Equipo",EquipoSchema);