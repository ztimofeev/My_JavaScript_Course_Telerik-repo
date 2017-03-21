'use strict';

function solve(args){
    let maxFreq = 1,
        currentFreq = 0;
    for (let i = 0; i < args.length; i += 1) {
        for (let j = 0; j < args.length; j += 1) {
            if (args[i] == args[j])
            currentFreq += 1;
            if (maxFreq < currentFreq) {
            maxFreq = currentFreq; 
            }
        }
        currentFreq = 0;
    }
    console.log(maxFreq)
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 2, 2, 2, 2, 2, 2, 4, 9, 3];
solve(arr1);