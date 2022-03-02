var express = require('express');
var router = express.Router();

/**
 * Creación del controlador de la ruta users de la aplicación.
 */
router.get('/', function(req, res, next) {
  res.render('users',{title: 'Users', message: 
  '¡Hola! ¿Quieres saber algo?'});
});

/**
 * Creación del controlador de la ruta users/cool de la aplicación.
 */
router.get('/cool', function(req, res, next) {
  res.render('usersCool',{title: 'Users - Cool', message: '¡Eres genial!'});
});

module.exports = router;
