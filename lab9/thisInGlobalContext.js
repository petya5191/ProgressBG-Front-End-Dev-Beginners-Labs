/* ------------------------- this in global context ------------------------- */

// console.log(this);

/* ----------------------------- in arrow syntax ---------------------------- */

let r1 = {
    'width': 20,
    'height': 10,
    'nonArrowMethod': function () {
        let foo = ()=>{
            console.dir( this );
        }
        foo();
    },
    'calcArea': ()=>{
        console.dir( this );
    }
}

r1.nonArrowMethod();
r1.calcArea();



