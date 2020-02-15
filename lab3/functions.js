'use strict';
// default function parameters
// function expression
const add = function(x,y,z=2) {
    return (x+y) ** z
}

console.log( add(2,3) ); // 25
console.log( add(2,3,3) ); // 125

