const express = require('express');
const logger = require('./middleware/logger');
const soapRouter = require('./routes/soap.routes');

const app = express();
app.use(logger);       // 1.º el registro
app.use(soapRouter);   // 2.º las rutas SOAP

module.exports = app;