'use strict';

function solve(args){
    var a = parseFloat(+args[0]),
        b = parseFloat(+args[1]),
        c = parseFloat(+args[2]);
    if (a > b){
        if (b > c){
            return a + ' ' +  b + ' ' +  c; 
        } else if (a > c) {
            return a + ' ' +  c + ' ' +  b; 
        } else {
            return c + ' ' +  a + ' ' +  b; 
        };   
    } else if (a > c){
        return b + ' ' +  a + ' ' +  c;
    } else if (b > c){
        return b+ ' ' + c + ' ' + a; 
    } else {
        return c + ' ' + b + ' ' + a; 
    };
}

var arr = ['35', '45', '66'];
console.log(solve(arr));