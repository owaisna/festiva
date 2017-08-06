var mongoose = require("mongoose");

// order schema
var orderSchema = mongoose.Schema({
	user: {
		// type: String
		type : mongoose.Schema.Types.ObjectId,
		ref: "User",
		// required: true
	},
	catering: {
		type: String
		// type : mongoose.Schema.Types.ObjectId,
		// ref: "Catering",
		// required: true
	},
	service: {
		type: String
		// type : mongoose.Schema.Types.ObjectId,
		// ref: "Service",
		// required: true
	},
	venue: {
		type: String
		// type : mongoose.Schema.Types.ObjectId,
		// ref: "Venue",
		// required: true
	},
	event_type: {
		type: String
		// type : mongoose.Schema.Types.ObjectId,
		// ref: "EventType",
		// required: true
	},
	order_time: {
		type: Date,
		default: Date.now()
	},
	event_date: {
		type: Date,
		// required: true
	}
});

var Order = module.exports = mongoose.model('Order', orderSchema);

// get
module.exports.get = function (callback, limit) {
	Order.find(callback).limit;
};

// get by id
module.exports.getById = function (id, callback) {
	Order.findById(id, callback);
};

// get by user
module.exports.getByUser = function (userId, callback) {
	var i = { user : userId};
	// console.log(i);
	Order.find({ user : i }, {}, callback);
};

// add
module.exports.add = function (data, callback) {
	Order.create(data, callback);
};

// update
module.exports.update = function (id, data, options, callback) {
	var query = { _id: id };
	var update = data;
	Order.findOneAndUpdate(query, update, options, callback);
};

module.exports.del = function (id, callback) {
	var query = { _id: id };
	Order.remove(query, callback);
};