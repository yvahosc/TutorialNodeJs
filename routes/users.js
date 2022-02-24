var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{title: 'Users', message: 'Respond with a resource'});
});

router.get('/cool', function(req, res, next) {
  res.render('users',{title: 'Users - Cool', message: '¡Eres genial!'});
});

module.exports = router;
