var express = require('express');
var app= express();
var bodyParser =require('body-parser');

app.set('num', 1);
var num = app.get('num');
console.log(num); //1

app.use(function(req, res, next) {
console.log('Record timestamp');
next();
});

app.use(bodyParser.json());

app.post('/calculator/rest/multiply', function(req, res, next) {
	var body = req.body;
	var x = body.x;
	var y = body.y;
	var result = 0;
	var object = {
		"x" : x,
		"y" : y,
		"result X multiply Y" : x*y
	}
	res.json(object);
});

app.post('/calculator/rest/divide', function(req, res, next) {
	var body = req.body;
	var x = body.x;
	var y = body.y;
	var result = 0;
	var object = {
		"x" : x,
		"y" : y,
		"result X Divide Y" : x/y
	}
	res.json(object);
});

app.post('/calculator/rest/power2', function(req, res, next) {
	var body = req.body;
	var x = body.x;
	var y = body.y;
	var result = 0;
	var object = {
		"x" : x,
		"y" : y,
		"result X Power 2" : Math.pow(x,2),
		"result Y Power 2" : Math.pow(y,2)
	}
	res.json(object);
});

app.get('/help', function(req, res, next) {
res.send('Help me');
});

app.listen(3000);