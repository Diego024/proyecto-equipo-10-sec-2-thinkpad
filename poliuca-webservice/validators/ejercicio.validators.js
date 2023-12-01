const{body,param} = require('express-validator');
//const { param } = require('../routes/ejercicio.router');

const ejercicioValidator = {};

ejercicioValidator.createEjercicioValidator =[
   param("identifier")
     .optional()
     .isMongoId().withMessage("Identifier must be a Mongo id"),
   body("name")
     .notEmpty().withMessage("Nombre requerido"),
   body("grupo_muscular")
     .notEmpty().withMessage("Grupo muscular es requerido"),
   body("equipo")
     .notEmpty().withMessage("Equipo requerido"),
   body("imagen")
     .notEmpty().withMessage("Imagen requerido")
     .isURL().withMessage("Imagen debe ser una URL")    
];


ejercicioValidator.ejercicioIdParamsValidator=[
    param("identifier")
    .notEmpty().withMessage("Indentifier required")
    .isMongoId().withMessage("Identifier must be Mongo Id")
];



module.exports = ejercicioValidator;