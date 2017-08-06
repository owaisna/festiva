var mongoose = require('mongoose');

var CateringSchema = mongoose.Schema({
    package : String,
    description : String
});

var Catering = module.exports = mongoose.model('Catering', CateringSchema);

// get
module.exports.get = function(callback, limit){
    Catering.find(callback).limit;
};

// get by id
module.exports.getById = function(id, callback){
    Catering.findById(id, callback);
};

// add
module.exports.add = function(data, callback){
    Catering.create(data, callback);
};

// update
module.exports.update = function(id, data, options, callback){
    var query = {_id:id};
    var update = data;
    Catering.findOneAndUpdate(query, update, options, callback);
};

module.exports.remove = function(id, callback){
    var query = {_id:id};
    Catering.remove(query, callback);
};