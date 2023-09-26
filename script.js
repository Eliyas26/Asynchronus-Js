alert("JS file linked!");

// //.............Quizze 1..................//

// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }
// let promise = job();
// promise
// .then(function() {
//     console.log('Success 1');  //will not print anything to the console cuz
//                                   //  the Promise is rejected, so the then() method will not be called.
//  })
// .then(function() {
//     console.log('Success 2');  //The then() method's callback function will not be executed, 
//                                    // so nothing will be printed to the console.
// })
// .then(function() {
//     console.log('Success 3');
// })
// .catch(function() {
//     console.log('Error 1');   //The catch() block is used to handle Reject promis so 
//                                 // the job() function returns a Promise object that is rejected. 
//                                 //The catch() block will then be executed so This is the Ansewer
// })
// .then(function() {
//     console.log('Success 4'); //Then() mathode is only excuted when the promise fulfilled .
// });

//.............Quizze 2..................//

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {  // The first success message is printed because the first Promise object is resolved.
//                            // The second error message is printed because the second Promise object is rejected.
//     console.log(data); // If the argument is true, the function returns a Promise object that is resolved with the string success. 
//                         //If the argument is false, the function returns a Promise object that is rejected with the string error.

//     return job(false);
// })

// .catch(function(error) { ////This means that the catch() method will not be called. 
//                             // The catch() method's callback function will not be executed, so nothing will be printed to the console.
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) { //the argument is true, the function returns
//                         //a Promise object that is resolved with the string success
//     console.log(data); 

//     return job(true);
// })

// .catch(function(error) { // //The agreemnet that we pass is true so the promise is resolved so that 
//                              //  the catch() method will not be called. The catch() method's callback function will not be executed, 
//                             //so nothing will be printed to the console.
//     console.log(error);
// });


//.............Quizze 3..................//

function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);   //The first success message is printed because the first Promise object is resolved. 
                           // The second success message is printed because the second Promise object is also resolved.
   return job(true);
})

.then(function(data) {
    if (data !== 'victory') {  //// This code will be executed because the throw statement
                                  //  is not used inside the then() method.
        throw 'Defeat';          //// The return value of the then() method is ignored.
    }

    return job(true);
})

.then(function(data) { // This one is excuted b/c the promise is fulfiled by passing true statemnt as agreemnt
    console.log(data);
})

.catch(function(error) {
    console.log(error);  // dosent fullfill the request so it is not printed in consol.

    return job(false);
})

    .then(function(data) {
        console.log(data); // This is one excuted and printe out on consol the string success

        return job(true);
    })

.catch(function(error) {
    console.log(error);  // this one is not the answer

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return new Error('test'); // this one also true
})

.then(function(data) {
    console.log('Success:', data.message); // this one alos true
})

.catch(function(data) {
    console.log('Error:', data.message); // false
});