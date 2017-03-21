'use strict';

function solve(args){
    var a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        temp = 0;
    if (a > b){
        temp = a;
        a = b;
        b = temp;
    };
    return a.toString() + ' ' + b.toString();
}

var arr = ['7', '4'];

console.log(solve(arr));