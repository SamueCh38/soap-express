const express = require('express');
const fs = require('fs');
const path = require('path');
const soap = require('soap');

const router = express.Router();

// La librería soap necesita recibir el cuerpo "crudo" (sin convertir a JSON)
router.use(express.raw({ type: () => true, limit: '5mb' }));

const leerWsdl = (nombre) =>
  fs.readFileSync(path.join(__dirname, '..', 'wsdl', nombre), 'utf8');

soap.listen(router, {
  path: '/soap/conversiones',
  services: require('../services/conversiones.service'),
  xml: leerWsdl('conversiones.wsdl'),
});

soap.listen(router, {
  path: '/soap/geometria',
  services: require('../services/geometria.service'),
  xml: leerWsdl('geometria.wsdl'),
});

module.exports = router;