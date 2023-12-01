const express = require("express");
//enrutador para configurar
const router = express.Router();

const{createEquipoValidator,equipoIdParamsValidator}= require("../validators/equipo.validators");
const validateFields = require("../validators/index.middleware")
const equipoController = require("../controllers/equipo.controller");

router.get("/getAll/",equipoController.findAll);
router.get("/get/:identifier/",equipoIdParamsValidator,validateFields,equipoController.finOneById);
router.post(["/create","/create/:identifier"],createEquipoValidator,validateFields,equipoController.create);
router.delete("/:identifier",equipoIdParamsValidator,validateFields,equipoController.deleteById);

router.put("/update/:identifier",equipoIdParamsValidator,validateFields,equipoController.updateEquip);

module.exports = router; 