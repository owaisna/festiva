var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// app.use(express.static(path.join(__dirname, 'client')));
// app.use(express.static(path.join(__dirname, 'client/src')));
app.use(express.static(path.join(__dirname, 'client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// schemas
var Users = require("./models/user");
var Orders = require("./models/order");
var Caterings = require("./models/catering");
var EventTypes = require("./models/event_type");
var Photos = require("./models/photo");
var Services = require("./models/service");
var Veneus = require("./models/venue");

// import routes
var order = require("./routes/order");
var catering = require("./routes/catering");
var service = require("./routes/service");
var photo = require("./routes/photo");
var user = require("./routes/user");
var venue = require("./routes/venue");
var eventType = require("./routes/event_type");
var feedback = require("./routes/feedback");

// connect to monoose
// mongoose.connect('mongodb://localhost:27017/festiv');
mongoose.connect('mongodb://127.0.0.1:27017/festiv');
var db = mongoose.connection;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    next();
});

// routes
app.get('/', function(req, res, next){
    res.send('App running');
});

app.use('/dashboard/orders', order);
app.use('/dashboard/catering', catering);
app.use('/dashboard/photos', photo);
app.use('/dashboard/users', user);
app.use('/dashboard/venues', venue);
app.use('/dashboard/services', service);
app.use('/dashboard/event_type', eventType);
app.use('/dashboard/feedback', feedback);

app.listen(3000, function(){
    console.log('app running on 3000');
});