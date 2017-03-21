'use strict';

function solve(args){
    var a = parseFloat(+args[0]),
        b = parseFloat(+args[1]),
        c = parseFloat(+args[2]);
    if (a === 0 || b === 0 || c === 0){
        return '0';
    } else if ((a < 0 && b < 0 && c < 0) || (a > 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c > 0)){
        return '-';
    } else if ((a > 0 && b > 0 && c > 0) || (a > 0 && b < 0 && c < 0) || (a < 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c < 0)){
        return '+';
    };
}

var arr = ['0', '2.55', '0'];
console.log(solve(arr));
