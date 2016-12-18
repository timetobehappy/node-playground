const {
    MongoClient
} = require('mongodb');
const assert = require('assert');


var connectUrl = `mongodb://localhost:27017/TestConnectPromise`;
MongoClient.connect(connectUrl)
    .then((db) => { // <- db as first argument
        //console.log(db);
        var col = db.collection('insert_one_with_promise');

        // deleteMany
        // col.deleteMany({
        //         a: 33
        //     }).then((result) => {
        //         console.log(result.result);
        //     }).catch((e) => {
        //         console.log(e);
        //     })

        // deleteOne
            // col.deleteOne({
            //         a: 31
            //     }).then((result) => {
            //         console.log(result.result);
            //     }).catch((e) => {
            //         console.log(e);
            //     })

        // findOneAndDelete
        col.findOneAndDelete({
                a: 3
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
