var mongoose = require('mongoose');

var VenueSchema = mongoose.Schema({
    name : String,
    location : String,
    // event_type : { type : mongoose.Schema.Types.ObjectId, ref : "EventType"},
    event_type : String,
    description : String
});

var Venue = module.exports = mongoose.model('Venue', VenueSchema);

// get
module.exports.get = function(callback, limit){
    Venue.find(callback).limit;
};

// get by id
module.exports.getById = function(id, callback){
    Venue.findById(id, callback);
};

// add
module.exports.add = function(data, callback){
    Venue.create(data, callback);
};

// update
module.exports.update = function(id, data, options, callback){
    var query = {_id:id};
    var update = data;
    Venue.findOneAndUpdate(query, update, options, callback);
};

module.exports.delete = function(id, callback){
    var query = {_id:id};
    Venue.remove(query, callback);
};