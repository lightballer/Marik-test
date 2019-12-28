'use strict';


const generateItem = () => Math.floor(Math.random() * 100 + 1);

const generateSeq = fn => (array, n) => {
    if (n != 0) {
        const randomItem = fn();
        array.push(randomItem); 
        return generateSeq(fn)(array, --n);
    } 
    else {
        return array;
    }
};

const result = array => {
    console.log(array);
    let compareValue = array[0];
    const sqrt = Math.floor(Math.sqrt(array.length));
    for (let i = 0; i < sqrt; i++) {           
        if (array[i] > compareValue) {
            compareValue = array[i];
        }
    }
    console.log('compare value is ' + compareValue);

    for (let i = sqrt; i < array.length; i++) { 
        if(array[i] > compareValue) {
            return array[i];
        }
    }
    return array[array.length - 1];
};

const array = [];
const a1 = generateSeq(generateItem)(array, 9);
const a2 = result(a1);
console.log(a2);