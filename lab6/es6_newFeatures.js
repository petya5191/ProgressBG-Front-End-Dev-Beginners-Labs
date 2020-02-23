function example1() {
    function foo() {
        console.log(`foo`);
    }

    const sqrt = function(x) {
        return x**2
    }


    const sqrtArrow = x=>x**2;

    console.log( sqrt(3) );
    console.log( sqrtArrow(3) );

    console.dir(sqrt);
    console.dir(sqrtArrow);


}

function syntax() {
    // (param1, param2, …, paramN) => { statements }

    // function(param1, param2, …, paramN) {
    //     // statements
    // }

    const addArrow = (x,y)=>{ return x+y};
    console.log( addArrow(2,3) );

    const sqrt = x=>x**2;
    console.log( sqrt(3) );
}
syntax();