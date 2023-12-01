const{body} = require('express-validator');
const { param } = require('../routes/deportista.router');

const deportistaValidator={};

deportistaValidator.createEjercicioValidator=[

    body("name"),
    body("last_name"),
    body("sports"),
    body("birth_date"),
    body("height"),
    body("weight"),
    body("email")
];