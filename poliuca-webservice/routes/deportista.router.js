const express = require("express");
//enrutador para configurar
const router = express.Router();

const deportistaController = require("../controllers/deportista.controller");

//post
router.get("/getAll/",deportistaController.findAll);
router.get("/:identifier/",deportistaController.finOneById);
router.post("/create/",deportistaController.create); 

module.exports = router;