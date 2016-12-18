var getUser = (userId, timeout, callback) => {
    var user = {
        id: userId,
        name: 'Vikram'
    };



    setTimeout(() => {
        callback(user);
    }, timeout);

};


console.log('Before callback');

getUser(33 ,5001, (userObject) => {
    console.log(`Id is ${userObject.id} & timeout is 5001`);

});

getUser(44 ,3000, (userObject) => {
    console.log(`Id is ${userObject.id} & timeout is 3000`);

});

console.log('After callback');
