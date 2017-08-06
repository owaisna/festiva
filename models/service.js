var mongoose = require('mongoose');

var ServiceSchema = mongoose.Schema({
    name: String,
    description : String
});

var Service = module.exports = mongoose.model('Service', ServiceSchema);

// get
module.exports.get = function(callback, limit){
    Service.find(callback).limit;
};

// get by id
module.exports.getById = function(id, callback){
    Service.findById(id, callback);
};

// add
module.exports.add = function(data, callback){
    Service.create(data, callback);
};

// update
module.exports.update = function(id, data, options, callback){
    var query = {_id:id};
    var update = data;
    Service.findOneAndUpdate(query, update, options, callback);
};

module.exports.del = function(id, callback){
    var query = {_id:id};
    Service.remove(query, callback);
};