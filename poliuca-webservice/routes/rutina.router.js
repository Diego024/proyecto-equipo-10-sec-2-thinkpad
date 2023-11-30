const express = require("express");
//enrutador para configurar
const router = express.Router();

const rutinaController = require("../controllers/rutina.controller");

router.get("/getAll/",rutinaController.findAll);
router.get("/:identifier/",rutinaController.finOneById);
router.post("/create/",rutinaController.create);

module.exports = router;