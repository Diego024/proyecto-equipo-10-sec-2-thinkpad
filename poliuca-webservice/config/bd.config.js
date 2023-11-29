//Importando mongoose de
const Mongoose = require("mongoose");
//Importando Debug 
const debug = require("debug")("app.database");

//Estos elementos se obtienen de variables de entorno
const dbhost=process.env.DBHOST || "127.0.0.1";
const dbport=process.env.DBPORT || "27017";
const dbname=process.env.DBNAME || "poliuca";

//Uri de conexion:
const dburi =process.env.DBURI ||`mongodb://${dbhost}:${dbport}/${dbname}`;


//Metodo Conectar
const connect = async () =>{
    try{
       await Mongoose.connect(dburi);
       debug("Conexion realizada");
    }catch(error){
       console.error(error);
       debug("No se pudo conectar a BD");
       process.exit(1);
    }
}

//Metodo Desconectar*/
const disconnect = async()=>{
    try {
        await Mongoose.disconnect();
        debug("Conexion finalizada");
    } catch (error) {
        process.exit(1);
    }
}

//Exportacion de metodos
module.exports={
    connect,
    disconnect
};