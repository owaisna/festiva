var router = require("express").Router();

var collection = require("./../models/user");

router.get('/giveall', function(req, res, next){
	collection.get(function(err, data){
		if (err) next(err);
		res.json(data);
	});
});

router.post('/signup', function(req, res, next){
	var body = req.body;
	// var role = { "role" : "user" }
	// body.push(role);
	collection.add(body, function(err, data){
		if (err) next(err);
		res.json(data);
	});
});

router.post('/login/', function(req, res, next){
	var body = req.body;
	// console.log(req.body);
	collection.findOne(
		// {name: body.name, password: body.pass},
		{ $or : [
			{ $and: [{ 'name':body.name }, { 'password': body.pass }] },
			{ $and: [{ 'email':body.name }, { 'password': body.pass }] }
		]},
		function(err, data){
			if (err) res.send(err);
			console.log(data);
			res.json(data);
		});
	});

router.get('/:_id', function(req, res, next){
	collection.getById(req.params._id, function(err, data){
		if (err) next(err);
		res.json(data);
	});
});

router.put('/:_id', function(req, res, next){
	var id = req.params._id;
	var body = req.body;
	collection.update(id, body, {}, function(err, data){
		if (err) next(err);
		res.json(data);
	});
});

router.delete('/:_id', function(req, res, next){
	var id = req.params._id;
	collection.delete(id, function(err, data){
		if (err) next(err);
		res.json(data);
	});
});

router.post('/dummy', function(req, res, next){
	// for ( var i=2; i<5; i++ ) {
		// var i = 5;
		// var body = {
		// 	email         	: "user"+i+"@mail.com",
		// 	name        	: "name "+i,
		// 	password		: "pass "+i,
		// 	address 		: "address "+i,
		// 	phone   		: "123123"+i
		// };

		// collection.add(body, function(err, data){
		// 	if (err) next(err);
		// 	res.json(data);
		// });
	// };
});

module.exports = router;