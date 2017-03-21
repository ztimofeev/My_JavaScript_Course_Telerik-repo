'use strict';

function solve(args){
    args.splice(0, 1);
    let num = +args.pop();
    for (var i in args){
        if (num === +args[i]) {
           return i;
        }
    }
    return -1;
}

let arr = ['10', '1', '2', '8', '16', '31', '32', '64', '77', '99', '32'];
console.log(solve(arr));