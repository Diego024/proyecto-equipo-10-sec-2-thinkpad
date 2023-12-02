const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const databse = require("./config/bd.config");

const apiRouter = require("./routes/index.router");

const app = express();

databse.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api",apiRouter);
const port =3500;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
module.exports = app;
