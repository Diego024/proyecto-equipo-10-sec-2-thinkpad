const Moongose = require("mongoose");
const Scheme = Moongose.schema;

const DeportistaSchema = new Scheme({
name:{},
last_name:{},
sports:{},
birth_date:{},
height:{},
weigth:{},
email:{},
password:{},
},{timiestamps:true});

module.export = Moongose.model("Deportista",DeportistaSchema);