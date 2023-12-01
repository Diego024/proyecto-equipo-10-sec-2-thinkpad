const express = require("express");
//enrutador para configurar
const router = express.Router();

const{createRutinaValidator,rutinaIdParamsValidator}= require("../validators/rutina.validators");
const validateFields = require("../validators/index.middleware")

const rutinaController = require("../controllers/rutina.controller");

router.get("/getAll/",rutinaController.findAll);
router.get("/:identifier/",rutinaIdParamsValidator,validateFields,rutinaController.finOneById);
router.post(["/create","/create/:identifier"],createRutinaValidator,validateFields,rutinaController.create);
router.delete("/:identifier",rutinaIdParamsValidator,validateFields,rutinaController.deleteById);

router.put("/update/:identifier",rutinaIdParamsValidator,validateFields,rutinaController.updateEquip);

module.exports = router;