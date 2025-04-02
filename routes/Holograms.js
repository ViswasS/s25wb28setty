var express = require('express');
var router = express.Router();
var HologramsRouter = require('./routes/Holograms');

router.get('/', function(req, res, next) {
  res.render('Holograms', { title: 'Search Results: Holograms' });
});

module.exports = router;