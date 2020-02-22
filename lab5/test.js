let functions = [];
let colors = ["red", "blue", "green"];

function doSomethingWithColor() {

    return function () {
        console.log(`i = ${i}`);
        console.log( colors[i] );
    }

}

for(var i = 0; i<3; i++){

    functions.push( doSomethingWithColor(i) )

}


functions[0](2); // red


// functions[1](); // i = 0
// functions[2](); // i = 0

