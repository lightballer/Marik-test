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
    //console.log('compare value is ' + compareValue);

    for (let j = sqrt; j < array.length; j++) { 
        if(array[j] > compareValue || array[j] == array[array.length - 1]) {
            compareValue = array[j];
            break;
        }
    }
    //console.log('new compare is ' + compareValue);
    
    const maxValue = array.reduce((a, b) => a > b ? a : b);
    //console.log('max value is ' + maxValue);
   
    if(compareValue == maxValue) return true;
    else return false;
};

const compose = countItems => getResult(generateSeq(countItems)); 

module.exports.compose = compose;
module.exports.generateSeq = generateSeq;
module.exports.generateItem = generateItem;

