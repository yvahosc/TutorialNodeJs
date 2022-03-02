var express = require('express');
var router = express.Router();

/**
 * Creación del controlador de ruta inicial de la aplicación.
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tutorial de Nodejs' });
});

module.exports = router;
