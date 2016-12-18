const {
    MongoClient
} = require('mongodb');
const assert = require('assert');

// MongoClient.connect('mongodb://localhost:27017/TestPromise', function(err, db) {
//     // Get the collection
//     if (err) {
//         return console.log('Unable to connect to MongoDB server', err);
//     }
//
//     var col = db.collection('insert_one_with_promise');
//
//     col.insertOne({
//         a: 3
//     }).then(function(r) {
//         assert.equal(1, r.insertedCount);
//         // Finish up test
//         db.close();
//     }).catch((e) => {
//         console.log('Something is wrong', e)
//     });
// });

var connectUrl = `mongodb://localhost:27017/TestConnectPromise`;
// MongoClient.connect(connectUrl).then((db) => {
//     db.close().then(() => {
//         console.log('Successfuly closed DB')
//     })
// }, (err) => {
//     console.log(err);
// });

MongoClient.connect(connectUrl)
    .then((db) => { // <- db as first argument
        console.log(db);
        var col = db.collection('insert_one_with_promise');
        col.insertOne({
            a: 3
        }).then(function(r) {
            assert.equal(1, r.insertedCount);
            // Finish up test
            db.close();
        }).catch((e) => {
            console.log('Something is wrong', e)
        });
    })
    .catch((err) => {
        console.log(err);
    })
