const express = require("express");
//enrutador para configurar
const router = express.Router();
const{createEjercicioValidator,ejercicioIdParamsValidator}= require("../validators/ejercicio.validators");
const validateFields = require("../validators/index.middleware")
const ejercicioController = require("../controllers/ejercicio.controller");

//post

router.get("/getAll/",ejercicioController.findAll);
router.get("/get/:identifier",ejercicioIdParamsValidator,validateFields,ejercicioController.finOneById);
router.post(["/create","/create/:identifier"],createEjercicioValidator,validateFields,ejercicioController.create); 
router.delete("/:identifier",ejercicioIdParamsValidator,validateFields,ejercicioController.deleteById);


router.put("/update/:identifier",ejercicioIdParamsValidator,validateFields,ejercicioController.updateEquip);

module.exports = router;