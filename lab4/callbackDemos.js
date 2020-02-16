function greet(userName) {
    return function () {
        console.log(`Hello ${userName}`);
    }
}

// greet("Ada");
setTimeout( greet("Ada") , 3000);


// function setTimeout(f, ms) {
//     f();
// }
