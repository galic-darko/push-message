var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
  //res.sendFile(appRoot + '/public/Bootstrap_Metro_Dashboard-master/index.html');
});

module.exports = router;
