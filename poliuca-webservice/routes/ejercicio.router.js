const express = require("express");
//enrutador para configurar
const router = express.Router();

const ejercicioController = require("../controllers/ejercicio.controller");

//post
router.get("/getAll/",ejercicioController.findAll);
router.get("/:identifier/",ejercicioController.finOneById);
router.post("/create/",ejercicioController.create); 

module.exports = router;