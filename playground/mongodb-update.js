const {
    MongoClient,
    ObjectID
} = require('mongodb');
const assert = require('assert');


var connectUrl = `mongodb://localhost:27017/TestConnectPromise`;
MongoClient.connect(connectUrl)
    .then((db) => { // <- db as first argument
        //console.log(db);
        var col = db.collection('insert_one_with_promise');

        // findOneAndUpdate
        col.findOneAndUpdate({
            _id: new ObjectID('58570f18ad88911c903e8d89')
        }, {
            $set: {
                a: 6
            },
            $inc: {
                b: 1
            }
        }, {
            returnOriginal: true // true will give you the document from before update //false will give you the new document
        }).then((result) => {
            console.log(result);
        }).catch((e) => {
            console.log(e);
        })


        // col.find({
        //     a: 3
        // }).toArray().then(function(docs) {
        //     console.log('insert_one_with_promise');
        //     console.log(JSON.stringify(docs, undefined, 2));
        // }).catch((e) => {
        //     console.log('Unable to fetch from insert_one_with_promise', e)
        // });

        db.close();
    })
    .catch((err) => {
        console.log(err);
    })
