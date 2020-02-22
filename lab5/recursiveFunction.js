function foo(max) {
    let count = 1;

    console.log(`I'm foo!`);

    if( count === max){
        foo();
    }

    count+=1;
}

foo(3);