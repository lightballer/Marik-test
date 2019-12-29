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

const compose = countItems => getResult(generateSeq(countItems));

const a3 = compose(16);
console.log(a3);