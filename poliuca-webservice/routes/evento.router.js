const express = require("express");
//enrutador para configurar
const router = express.Router();

const eventoController = require("../controllers/ejercicio.controller");

router.get("/getAll/",eventoController.findAll);
router.get("/:identifier/",eventoController.finOneById);
router.post("/create/",eventoController.create);

module.exports = router;