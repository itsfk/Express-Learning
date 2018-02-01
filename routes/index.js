var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/tests/:id', function(req, res, next){
  res.render('tests',{output:req.params.id});
});
router.post('/tests/submit', function(req, res, next){
  var id =req.body.id;
  res.redirect('/tests/'+id)
});

module.exports = router;
