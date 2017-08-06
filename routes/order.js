var router = require("express").Router();
var ObjectId = require("mongoose").Types.ObjectId;
var m = require('mongoose');

var collection = require("./../models/order");
var Users = require("./../models/user");
// var Orders = require("./../models/order");
var Caterings = require("./../models/catering");
var EventTypes = require("./../models/event_type");
var Photos = require("./../models/photo");
var Services = require("./../models/service");
var Veneus = require("./../models/venue");


router.get('/', function (req, res, next) {
	collection.aggregate([
		{
			$lookup: {
				from: "users",
				localField: "user",
				foreignField: "_id",
				as: "fkey"
			}
		}
	], function (err, data) {
		if (err) { res.send(err) }
		res.json(data);
	});

});

router.post('/', function (req, res, next) {
	var body = req.body;
	console.log(body);
	collection.add(body, function (err, data) {
		if (err) next(err);
		console.log(data);
		res.json(data);
	});
});

router.get('/:_id', function (req, res, next) {
	// var q = {_id:req.params._id};
	
	// collection.find(q, function (err, data) {
	// 	if (err) next(err);
	// 	console.log(data);
	// 	res.json(data);
	// });

	collection.aggregate([
		// "58f4652bbdbe75295c923446"
		// "58f487687498000b2082c808"
		// { $match: { "user": Users(ObjectId("58f4652bbdbe75295c923446")) } },
		{ $match: { _id : new m.Types.ObjectId(req.params._id) } },
		{
			$lookup: {
				from: "users",
				localField: "user",
				foreignField: "_id",
				as: "fkey"
			}
		}
	], function (err, data) {
		if (err) { res.send(err) }
		// console.log(data);
		res.json(data);
	});
});

router.get('/user/:id', function (req, res, next) {
	id = "58f4652bbdbe75295c923446";
	// { _id: 590236b0e64a7728ec4cb68a, name: '' }
	// collection.getByUser(id, function (err, data) {
	// 	if (err) send(err);
	// 	console.log(data);
	// 	res.json(data);
	// });

	// collection.aggregate([
	// 	// "58f4652bbdbe75295c923446"
	// 	// "58f487687498000b2082c808"
	// 	// { $match: { "user": Users(ObjectId("58f4652bbdbe75295c923446")) } },
	// 	// { $match: { "user" : req.params._id } },
	// 	{
	// 		$lookup: {
	// 			from: "users",
	// 			localField: "user",
	// 			foreignField: "_id",
	// 			as: "fkey"
	// 		}
	// 	}
	// ], function (err, data) {
	// 	if (err) { res.send(err) }
	// 	console.log(data);
	// 	res.json(data);
	// });
});

router.put('/:_id', function (req, res, next) {
	var id = req.params._id;
	var body = req.body;
	collection.update(id, body, {}, function (err, data) {
		if (err) next(err);
		res.json(data);
	});
});

router.delete('/:_id', function (req, res, next) {
	var id = req.params._id;
	collection.del(id, function (err, data) {
		if (err) next(err);
		res.json(data);
	});
});



router.post('/dummy', function (req, res, next) {
	// var body = {
	// 	user_id         : Users( ObjectId("58c7ce96c619b49a82d223e8")),
	// 	venue        : Veneus(ObjectId("58c7cdecc619b49a82d223e0")),
	// 	catering		: Caterings(ObjectId("58c7c35bc619b49a82d2225a")),
	// 	service		: Services(ObjectId("58c7cca8c619b49a82d223af")),
	// 	event_type	: EventTypes(ObjectId("58c7ca95c619b49a82d22359")),
	// 	event_date		: "2001-03-22T19:00:00.000Z",
	// 	order_time		: "2001-05-22T19:00:00.000Z"
	// };
	for (var i = 0; i < 2; i++) {
		var body = {
			user: Users(ObjectId("58f487687498000b2082c808")),
			// user: "58f4652bbdbe75295c923446",
			venue: "venue " + i,
			catering: "catering " + i,
			service: "service " + i,
			event_type: "type " + i,
			event_date: new Date(),
			// order_time: "2001-05-22T19:00:00.000Z"
		};

		collection.add(body, function (err, data) {
			if (err) next(err);
			console.log(data);
			// res.json(data);
		});
	}
});

module.exports = router;