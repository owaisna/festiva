var router = require("express").Router();

var collection = require("./../models/feedback");

router.get('/', function (req, res, next) {
    collection.get(function (err, data) {
        if (err) next(err);
        res.json(data);
    });
});

router.post('/', function (req, res, next) {
    var body = req.body;
    collection.add(body, function (err, data) {
        if (err) next(err);
        res.json(data);
    });
});

router.get('/:_id', function (req, res, next) {
    collection.getById(req.params._id, function (err, data) {
        if (err) next(err);
        res.json(data);
    });
});

router.put('/:_id', function (req, res, next) {
    var id = req.params._id;
    var body = req.body;
    collection.update(id, body, {}, function (err, data) {
        if (err) next(err);
        res.json(data);
    });
});

router.delete('/:_id', function (req, res, next) {
    var id = req.params._id;
    collection.del(id, function (err, data) {
        if (err) next(err);
        res.json(data);
    });
});

router.post('/dummy', function (req, res, next) {
    for (var i = 0; i < 5; i++) {
        var body = {
            user: 'service ' + i,
            feedback: 'feedback ' + i,
            service: 'service name ' + i
        };

        collection.add(body, function (err, data) {
            if (err) next(err);
            res.json(data);
        });
    }
});

module.exports = router;