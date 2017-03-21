'use strict';

function solve(args){
    let arr = [];
    for (let i = 0 ; i < args.length; i += 1){
        arr.push(args[i])
    }
    let first = arr[0].length, 
        second = arr[1].length;
    
    if (first > second){
        console.log('>');
    } else if (first < second){
        console.log('<');
    } else {
        console.log('=');
    }
}

solve(['hello', 'hel000lo']);