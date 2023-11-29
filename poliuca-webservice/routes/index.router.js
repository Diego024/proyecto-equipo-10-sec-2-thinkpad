const express = require("express");
const router = express.Router();

const ejercicioRouter = require("./ejercicio.router");
const equipoRouter = require("./equipo.router");
const deportistaRouter = require("./deportista.router");

router.use("/ejercicio",ejercicioRouter);
router.use("/equipo",equipoRouter);
router.use("/deportista",deportistaRouter);

module.exports  = router;

