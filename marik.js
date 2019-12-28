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
    const sqrt = Math.sqrt(array.length);
    for (let i = 0; i < 3; i++) {           // add Math.floor soon
        if (array[i] >= array[i-1]) {
            console.log('comp val' + compareValue);
            compareValue = array[i];
        }
    }
    for (let j = 3; j < array.length; j++) {
        if(array[j] > compareValue) {
            return array[j];
        }
        if(array[array.length - 1]) return array[array.length -1];
    }
};

const array = [];
const a1 = generateSeq(generateItem)(array, 9);
const a2 = result(a1);
console.log(a2);