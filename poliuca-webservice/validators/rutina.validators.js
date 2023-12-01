const{body,param} = require('express-validator');

const rutinaValidator = {};

rutinaValidator.createRutinaValidator =[
   param("identifier")
     .optional()
     .isMongoId().withMessage("Identifier must be a Mongo id"),
   body("name")
     .notEmpty().withMessage("Nombre requerido"),
   body("tipo")
     .notEmpty().withMessage("Tipo Rutina es requerido"),
];


rutinaValidator.rutinaIdParamsValidator=[
    param("identifier")
    .notEmpty().withMessage("Indentifier required")
    .isMongoId().withMessage("Identifier must be Mongo Id")
];



module.exports = rutinaValidator;