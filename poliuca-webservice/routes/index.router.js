const express = require("express");
const router = express.Router();

const ejercicioRouter = require("./ejercicio.router");
const equipoRouter = require("./equipo.router");
const deportistaRouter = require("./deportista.router");
const rutinaRouter = require("./rutina.router")
const eventoRouter = require("./evento.router");


router.use("/ejercicio",ejercicioRouter);
router.use("/equipo",equipoRouter);
router.use("/deportista",deportistaRouter);
router.use("/rutina",rutinaRouter);
router.use("/evento",eventoRouter);


module.exports  = router;

