var express = require('express'),
    indexRouter = express.Router(),
    mongodb = require('mongodb').MongoClient;


var router = function () {
    indexRouter.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/message';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('message');
                collection.find({}).toArray(function (err, results) {
                    res.render('index', {
                        message: results
                    });
                });
            });
        });
    

    return indexRouter;
}

module.exports = router;