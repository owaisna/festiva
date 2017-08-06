var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedbackSchema = new Schema({
    user : String,
    feedback : String,
    service : String,
    date: {
		type: Date,
		default: Date.now()
	},
});

var Feedback = module.exports = mongoose.model('Feedback', FeedbackSchema);


// get
module.exports.get = function(callback, limit){
    Feedback.find(callback).limit;
};

// get by id
module.exports.getById = function(id, callback){
    Feedback.findById(id, callback);
};

// add
module.exports.add = function(data, callback){
    Feedback.create(data, callback);
};

// update
module.exports.update = function(id, data, options, callback){
    var query = {_id:id};
    var update = data;
    Feedback.findOneAndUpdate(query, update, options, callback);
};

module.exports.remove = function(id, callback){
    var query = {_id:id};
    Feedback.remove(query, callback);
};