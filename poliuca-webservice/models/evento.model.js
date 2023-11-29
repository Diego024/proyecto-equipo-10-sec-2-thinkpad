const Moongose = require("mongoose");
const Scheme = Moongose.Schema;

const EventoSchema = new Scheme({
tile:{},
type:{},
place:{},
hour:{},
date:{},
},{timiestamps:true});

module.export = Moongose.model("Evento",EventoSchema);