
// const sqrt = x=>x**2;

// console.log(sqrt(2)); // 4
// console.log(sqrt(3)); // 9


// function add() {
//    function foo() {
//     console.log(arguments);
//    }

//    foo();
// }

// arguments in arrow syntax
// let add = function(){

//     // console.log(arguments)

//     let foo = ()=>{
//         console.log(arguments)
//     };

//     foo();
// }

// console.log( add(2,3) );
// console.log( add(2,3,4) );
// console.log( add(2,3,4,5) );


// let dirArrowArgs = ()=>{
//     console.dir(arguments);
// }
// dirArrowArgs(24,5);

// "this" in arrow syntax:
// console.log(`this in global: ${this}`);

// function foo() {
//     console.log(`this in foo: ${this}`);
// }

// let bar = ()=>{
//     console.log(`this in bar: ${this}`);
// }

// foo();
// bar();


// let user = {
//     "name": "pesho",
//     "greet": function () {
//         console.log(`The user name is ${ this.name }`);
//     }
// }

// let boss = {

//     'name': 'Maria',
//     "greet": ()=> {
//         console.log(`The BOSS name is ${ this.name }`);
//     }

// }

// console.log(`this = ${this}`);
// user.greet(); // The user name is:
// boss.greet(); // The user name is:


// loose binding:
// let cb;
// cb = (cb || ()) => {};

// arrows are always anonymous

