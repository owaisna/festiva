var router = require("express").Router();

var collection = require("./../models/photo");

router.get('/', function(req, res, next){
    collection.get(function(err, data){
        if (err) next(err);
        res.json(data);
    });
});

router.post('/', function(req, res, next){
    var body = {
        name : 'photo name',
        caption: 'photo caption',
        src : "/assets/photos/1.png"
    };
    collection.add(body, function(err, data){
        if (err) next(err);
        res.json(data);
    });
});

router.get('/:_id', function(req, res, next){
    collection.getById(req.params._id, function(err, data){
        if (err) next(err);
        res.json(data);
    });
});

router.put('/:_id', function(req, res, next){
    var id = req.params._id;
    var body = req.body;
    collection.update(id, body, {}, function(err, data){
        if (err) next(err);
        res.json(data);
    });
});

router.delete('/', function(req, res, next){
    // var id = req.params._id;
    collection.findOneAndRemove({}, function(err, data){
        if (err) next(err);
        res.json(data);
    });
});

module.exports = router;