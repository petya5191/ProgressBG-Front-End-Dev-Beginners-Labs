let a = {
    'a':1
}
a.sayHello = function () {
    console.log(`Hello`);
}

let b = Object.create(a);
b.b = 2;

// let c = {};
// not a good prictise:
// c.__proto__ = b;


let c = Object.create(b);

console.log(`c.a = ${c.a}`);
console.log(`c.b = ${c.b}`);

c.sayHello();