var x = 5;

function outer(){

    function inner(){
        console.log(x);
    }

    return inner;
}

// console.log(x);
let foo = outer();
foo();
