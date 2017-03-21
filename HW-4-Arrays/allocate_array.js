'use strict';

function solve(args){
    let endNum = + args;
    for (let i = 0; i < endNum; i += 1){
        console.log(i * 5);
    }
}

solve('5');
