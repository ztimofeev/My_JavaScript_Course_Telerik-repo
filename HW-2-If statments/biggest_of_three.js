'use strict';

function solve(args){
    var a = parseFloat(+args[0]),
        b = parseFloat(+args[1]),
        c = parseFloat(+args[2]);
    if (a > b){
        if (a > c){
            return a.toString();
        } else {
            return c.toString();
        };
    } else if (b > c){
        return b.toString();
    } else {
        return c.toString();
    };
}

var arr = ['7', '3', '4'];
console.log(solve(arr));