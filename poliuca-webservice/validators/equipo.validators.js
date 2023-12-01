const{body,param} = require('express-validator');
const equipoValidator = {};

equipoValidator.createEquipoValidator =[
   param("identifier")
     .optional()
     .isMongoId().withMessage("Identifier must be a Mongo id"),
   body("name")
     .notEmpty().withMessage("Nombre requerido"),
   body("create_date")
     .notEmpty().withMessage("fecha requerida"),
  /* body("players")
     .notEmpty().withMessage("cantidad jugadores requerido"),
   body("sport")
     .notEmpty().withMessage("Deporte requerido"),
*/
   
];


equipoValidator.equipoIdParamsValidator=[
    param("identifier")
    .notEmpty().withMessage("Indentifier required")
    .isMongoId().withMessage("Identifier must be Mongo Id")
];



module.exports = equipoValidator;