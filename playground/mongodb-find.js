const {
    MongoClient
} = require('mongodb');
const assert = require('assert');


var connectUrl = `mongodb://localhost:27017/TestConnectPromise`;
MongoClient.connect(connectUrl)
    .then((db) => { // <- db as first argument
        //console.log(db);
        var col = db.collection('insert_one_with_promise');
        col.find({
            a: 3
        }).toArray().then(function(docs) {
            console.log('insert_one_with_promise');
            console.log(JSON.stringify(docs, undefined, 2));
        }).catch((e) => {
            console.log('Unable to fetch from insert_one_with_promise', e)
        });

        db.close();
    })
    .catch((err) => {
        console.log(err);
    })
