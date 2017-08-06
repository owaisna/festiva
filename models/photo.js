var mongoose = require('mongoose');

var PhotoSchema = mongoose.Schema({
    name: String,
    caption : String,
    src : String,
    date: {
		type: Date,
		default: Date.now()
	}
});

var Photo = module.exports = mongoose.model('Photo', PhotoSchema);

// get
module.exports.get = function(callback, limit){
    Photo.find(callback).limit;
};

// get by id
module.exports.getById = function(id, callback){
    Photo.findById(id, callback);
};

// add
module.exports.add = function(data, callback){
    Photo.create(data, callback);
};

// update
module.exports.update = function(id, data, options, callback){
    var query = {_id:id};
    var update = data;
    Photo.findOneAndUpdate(query, update, options, callback);
};

module.exports.remove = function(id, callback){
    var query = {_id:id};
    Photo.remove(query, callback);
};