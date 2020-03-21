function fibonachi(fibArr,max){
    let last = fibArr[fibArr.length - 1];
    let prev = fibArr[fibArr.length - 2];
    console.log(`fibArr: ${fibArr}`);
    console.log(`last: ${last}, max: ${max}`);

    if(last >= max){
        console.log(`END`);
        // TODO: explain why not works
        return fibArr;
    }else{
        fibArr.push(prev + last);
        fibonachi(fibArr, max)
    }

    // return fibArr;
}


let fib = fibonachi([30, 60],2000);
console.log(fib);