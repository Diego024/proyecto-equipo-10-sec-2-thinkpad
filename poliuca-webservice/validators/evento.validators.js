const{body,param} = require('express-validator');

const eventoValidator = {};

eventoValidator.createEventoValidator =[
   param("identifier")
     .optional()
     .isMongoId().withMessage("Identifier must be a Mongo id"),
   body("title")
     .notEmpty().withMessage("Nombre evento  requerido"),
   body("type_event")
     .notEmpty().withMessage("Tipo de evento es requerido"),
   body("date")
     .isDate().withMessage("See requiere formato año-mes-dia")
];


eventoValidator.eventoIdParamsValidator=[
    param("identifier")
    .notEmpty().withMessage("Indentifier required")
    .isMongoId().withMessage("Identifier must be Mongo Id")
];


module.exports = eventoValidator;