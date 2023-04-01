const cb = callback => "This is a callback function.";
let spy = "Variable."

function receivesAFunction(cb) {
    cb(spy)
    return console.log(spy)
}

const fn = function () {
    console.log("This is a named function");
};

function returnsANamedFunction() {
    return fn
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("This is an anonymous function");
    }
}