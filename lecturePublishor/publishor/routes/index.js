var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: '讲座通',
		user: 'Admin'
	});
});

module.exports = router;
