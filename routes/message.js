var express = require('express'),
    messageRouter = express.Router(),
    mongodb = require('mongodb').MongoClient;


var router = function () {
    messageRouter.route('/')
        .post(function (req, res) {
            var url = 'mongodb://localhost:27017/message';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('message');
                var message = {
                    message: req.body.messageInput,
                    textColor: req.body.textColor,
                    backgroundColor: req.body.backgroundColor
                }
                collection.remove({})
                collection.insert(message, function (err, results) {
                    res.redirect('/')
                    db.close();
                });

            });
        });

    return messageRouter;
}

module.exports = router;