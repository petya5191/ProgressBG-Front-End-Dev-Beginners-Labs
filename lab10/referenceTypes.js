// shallow copy:
let arrOri1 = [1,2,3];
let arrCopy1 = [...arrOri1];

arrOri1[0] = 999;
console.log( arrOri1 );
console.log( arrCopy1 );

// non - deep copy:
let arrOri = [
    [1,2],
    [3,4]
];
let arrCopy = arrOri.slice();

arrOri[0][0] = 999;
console.log( arrOri );
console.log( arrCopy );