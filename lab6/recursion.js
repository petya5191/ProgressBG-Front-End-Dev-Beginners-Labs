function factorielDemos() {
    // n! = n * (n-1)!
    // 1! = 1

    function  fact(n) {
        if( n===1){
            return 1
        }else{
            return n * fact(n-1)
        }
    };

    function factIter(n){
        let res = 1;

        for (let i = n; i >= 1; i--) {
            res = res * i;
        }

        return res;
    }

    console.log( fact(3) );
}

function powerDemos() {

    function powerIter(a,b) {
        // a**b = b times : res = res * a
        let res = 1;

        for (let i = 0; i < b; i++) {
            res *= a;
        }

        return res;
    }

    function powerRec(a,b) {
        if (b === 1) {
            return a
        }else{
            return a * powerRec(a, b-1);
        }
    }

    console.log( powerIter(2,10) ); // 8
    console.log( powerRec(2,10) ); // 8
}

demo2();


