function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("named function returned");
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("returns anonymous function")
    }
}