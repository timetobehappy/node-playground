var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                //console.log("Resolved asyncAdd")
                resolve(a + b);
            } else {
                //console.log("Rejected asyncAdd")
                reject('Arguments need to be numbers');
            }
        }, 1500);
    })
}



asyncAdd(5, "3").then((res) => {
    console.log(res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log(`Final result : ${res}`);
}).catch((errorMessage)=> {
  console.log(errorMessage);
})

//Example with mutliple error scenrios but better to use a catch as above as there can be some issues (Section 4, Lecture 47)
// asyncAdd(5, "3").then((res) => {
//     console.log(res);
//     return asyncAdd(res, 33);
// }, (errorMessage) => {
//     console.log(errorMessage);
// }).then((res) => {
//     console.log(`Final result : ${res}`);
// }, (errorMessage) => {
//     console.log(`Final error : ${errorMessage}`)
// })


// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Hey it did not resolve");
//     }, 2500);
// });
//
//
//
// somePromise.then((message) => {
//     console.log(`Success: ${message}`);
// }, (errorMessage) => {
//     console.log(`Failure: ${errorMessage}`);
// });
