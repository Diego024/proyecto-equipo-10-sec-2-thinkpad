const express = require("express");
//enrutador para configurar
const router = express.Router();

const{createDeportistaValidator,deportistaIdParamsValidator}= require("../validators/deportista.validators");
const validateFields = require("../validators/index.middleware")
const deportistaController = require("../controllers/deportista.controller");

//post
router.get("/getAll/",deportistaController.findAll);
router.get("/get/:identifier",deportistaIdParamsValidator,validateFields,deportistaController.finOneById);
router.post(["/create","/create/:identifier"],createDeportistaValidator,validateFields,deportistaController.create); 
router.delete("/:identifier",deportistaIdParamsValidator,validateFields,deportistaController.deleteById);


router.put("/update/:identifier",deportistaIdParamsValidator,validateFields,deportistaController.updateEquip);

module.exports = router;