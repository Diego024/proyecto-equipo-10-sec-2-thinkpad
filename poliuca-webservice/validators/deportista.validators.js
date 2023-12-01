const{body,param} = require('express-validator');

const deportistaValidator={};

deportistaValidator.createDeportistaValidator=[
    param("identifier")
     .optional()
     .isMongoId().withMessage("Identifier must be a Mongo id"),
    body("name")
         .notEmpty().withMessage("Nombre requerido"),
    body("last_name")
         .notEmpty().withMessage("Apellido requerido"),
    body("birth_date")
         .notEmpty().withMessage("Cumpleaños requerido, año-mes-dia"),
    body("height")
        .notEmpty().withMessage("Altura requerido"),
    body("weight")
        .notEmpty().withMessage("Peso requerido"),
    body("email")
        .notEmpty().withMessage("Correo requerido")
];

deportistaValidator.deportistaIdParamsValidator=[
    param("identifier")
    .notEmpty().withMessage("Indentifier required")
    .isMongoId().withMessage("Identifier must be Mongo Id")
];

module.exports = deportistaValidator;