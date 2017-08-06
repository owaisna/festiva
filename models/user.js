var mongoose = require('mongoose');
// var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  email: { type: String},
  name: { type: String, default: ''},
  password: String,
  address: String,
  phone: Number
});

// userSchema.pre('save', function (next) {
//     var user = this;
//     if (this.isModified('password') || this.isNew) {
//         bcrypt.genSalt(10, function (err, salt) {
//             if (err) {
//                 return next(err);
//             }
//             bcrypt.hash(user.password, salt, function (err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//                 user.password = hash;
//                 next();
//             });
//         });
//     } else {
//         return next();
//     }
// });

// userSchema.methods.comparePassword = function (passw, cb) {
//     bcrypt.compare(passw, this.password, function (err, isMatch) {
//         if (err) {
//             return cb(err);
//         }
//         cb(null, isMatch);
//     });
// };

var User = module.exports = mongoose.model('User', userSchema);

// get
module.exports.get = function(callback, limit){
    User.find(callback);
};

// get by id
module.exports.getById = function(id, callback){
    User.findById(id, callback);
};

// add
module.exports.add = function(data, callback){
    User.create(data, callback);
};

// update
module.exports.update = function(id, data, options, callback){
    var query = {_id:id};
    var update = data;
    User.findOneAndUpdate(query, update, options, callback);
};

module.exports.delete = function(id, callback){
    var query = {_id:id};
    User.remove(query, callback);
};