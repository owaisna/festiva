var mongoose = require('mongoose');

var eventTypeSchema = mongoose.Schema({
    type : String,
    // description : String
});

var EventType = module.exports = mongoose.model('EventType', eventTypeSchema);

// get
module.exports.get = function(callback){
    EventType.find(callback);
};

// add
module.exports.add = function (data, callback) {
	EventType.create(data, callback);
};