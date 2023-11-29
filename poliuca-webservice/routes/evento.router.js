const express = require("express");
//enrutador para configurar
const router = express.Router();

const eventoController = require("../controllers/ejercicio.controller");

router.get("/getAll/",eventoController.findAll);
router.post("/create/",eventoController.create);

module.exports = router;