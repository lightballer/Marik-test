'use strict';

const marik = require('./marik');
const iteration = marik.compose;



const multiplyExec = (fn, n) => count => {
    let result = 0;
    while(count != 0) {
        const exec = fn(n);
        if(exec == true) result += 1;
        --count;
    } 
    return result + ' %';
};


const arraySize = 16;
const countIterations = 100; 

const a4 = multiplyExec(iteration, arraySize)(countIterations);   // 9 items in array, 100 iterations
console.log(a4);
