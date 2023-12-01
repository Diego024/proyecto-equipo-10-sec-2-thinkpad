const express = require("express");
//enrutador para configurar
const router = express.Router();/*
const{createEjercicioValidator,ejercicioIdParamsValidator}= require("../validators/ejercicio.validators");
const validateFields = require("../validators/index.middleware")*/
const ejercicioController = require("../controllers/ejercicio.controller");

//post
/*
router.get("/getAll/",ejercicioController.findAll);
router.get("/:identifier/",ejercicioController.finOneById);
router.post("/create/",ejercicioController.create); */


router.get("/getAll/",ejercicioController.findAll);
router.get("/:identifier/",ejercicioIdParamsValidator,validateFields,ejercicioController.finOneById);
router.post("/create/",createEjercicioValidator,validateFields,ejercicioController.create); 

module.exports = router;