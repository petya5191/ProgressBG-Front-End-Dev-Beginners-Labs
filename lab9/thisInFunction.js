"use strict"

// in normal function call
// function foo() {
//     console.log( this );
// }
// foo();

// in method call:
let obj ={
    'foo': function () {
        console.dir( this );
    }
}

obj.foo();

