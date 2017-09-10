/*function asyncMethod(message, cb) {
    setTimeout(function() {
        console.log(message);
        cb();
    }, 500);
}

asyncMethod('Open DB Conection', function() {
    asyncMethod('Find User', function() {
        asyncMethod('validate User', function(){
            asyncMethod('do stuff', function() {
               console.log('Successfull Conection!'); 
            })
        })
    })
})*/

//Una mejor forma de hacer esto es usando un patrón asincrónico Promises

function asyncMethod(message) {
    return new Promise(function (fulfill, reject) {
        setTimeout(function () {
            console.log(message);
            fulfill();
        }, 500)
    }); 
}

function findUser() {
    return asyncMethod('Find User');
}

function validateUser() {
    return asyncMethod('validate User');
}

function doStuff() {
    return asyncMethod('do Stuff')
        //.then(function () {})
}

asyncMethod('Open DB Connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function() {})