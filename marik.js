'use strict';

const generateItem = () => Math.floor(Math.random() * 100 + 1);

const generateSeq = n => {
    let array = [];
    while(n != 0) {
        const item = generateItem();
        array.push(item); 
        --n;
    } 
        return array;
};

const getResult = (array) => {
    //console.log(array);
    let compareValue = array[0];
    const sqrt = Math.floor(Math.sqrt(array.length));
    
    for (let i = 0; i < sqrt; i++) {           
        if (array[i] > compareValue) {
            compareValue = array[i];
        }
    }
    //console.log('compare value is ' + compareValue);

    for (let j = sqrt; j < array.length; j++) { 
        if(array[j] > compareValue || array[j] == array[array.length - 1]) {
            compareValue = array[j];
            break;
        }
    }
    //console.log('new compare is ' + compareValue);
    let maxValue = array[0];
    
    for(let k = 0; k < array.length; k++) {
        if(array[k] > maxValue) {
            maxValue = array[k];
        }
    }
    //console.log('max value is ' + maxValue);
   if(compareValue == maxValue) return true;
   else return false;
};

const compose = countItems => getResult(generateSeq(countItems)); 

const multiplyExec = (fn, n) => count => {
    let result = 0;
    while(count != 0) {
        const exec = fn(n);
        if(exec == true) result += 1;
        --count;
    } 
    return result + ' %';
};

// const a3 = compose(16);
// console.log(a3);

const a4 = multiplyExec(compose, 9)(100);   // 9 items in array, 100 iterations
console.log(a4);
