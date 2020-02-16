let foo = function( f ) {
    // let a = f();
    // a();
    f()();
}



// foo( 4 );
foo( function () {
    console.log(`Anonymous in foo call`);
    return function () {
        console.log(`brrrrrrr`);
    };
} );