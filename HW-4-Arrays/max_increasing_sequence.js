'use strict';

function solve(args){
    let arrLength = +args[0],
    arr = [];
    for (let i = 1; i <= arrLength; i += 1) {
        arr.push(+args[i]);
    }

    let count = 1,
        maxInc = 1;
    for (let i = 0; i < arr.length; i += 1){
        if (arr[i] + 1 === arr[i+1]){
            count += 1;
            if (maxInc < count){
                maxInc = count;
            }
        } else {
            count = 1;
        }
    }
    console.log(maxInc); 
}
var arr1=[22, '1', '2', '3', '4', '5', '6', '7', '8', '2', '3', '6', '3', '2', '9', '2', '3', '4', '5', '6', '7', '9', '3'];
solve(arr1);