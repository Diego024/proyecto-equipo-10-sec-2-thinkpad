const Moongose = require("mongoose");
const Scheme = Moongose.schema;

const EventoSchema = new Scheme({
tile:{},
type:{},
place:{},
hour:{},
date:{},
},{timiestamps:true});

module.export = Moongose.model("Evento",EventoSchema);