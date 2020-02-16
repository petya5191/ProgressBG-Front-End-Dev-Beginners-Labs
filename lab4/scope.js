// let x = 1, y=1; // x and y in global scope

// function foo(y){
//     let x = 2;
//     y = 9;

//     function bar(y){
//         var y = 3;  // y in bar scope
//         x = 3;     // uses x in foo scope
//         console.log(`y = ${y}`); //
//     }
//     bar(222);

//     y = 100;
//     console.log(`x,y in foo: ${x}, ${y}`); // y = 100
// }

// foo();
// console.log(`x in gloabl: ${x}, ${y}`); // x = 3, y = 100
// x,y in foo: 3, 2
// x in gloabl: 1, 1

// block scope:
{
    // let x = 1;
    var y = 1;
    const z = 1;
}
// console.log(`x = ${x}`); //
console.log(`y = ${y}`);
console.log(`z = ${z}`);