const express = require("express");
//enrutador para configurar
const router = express.Router();

const{createEventoValidator,eventoIdParamsValidator}= require("../validators/evento.validators");
const validateFields = require("../validators/index.middleware")
const eventoController = require("../controllers/evento.controller");

router.get("/getAll/",eventoController.findAll);
router.get("/get/:identifier/",eventoIdParamsValidator,validateFields,eventoController.finOneById);
router.post(["/create","/create/:identifier"],createEventoValidator,validateFields,eventoController.create);
router.delete("/:identifier",eventoIdParamsValidator,validateFields,eventoController.deleteById);


router.put("/update/:identifier",eventoIdParamsValidator,validateFields,eventoController.updateEquip);

module.exports = router;