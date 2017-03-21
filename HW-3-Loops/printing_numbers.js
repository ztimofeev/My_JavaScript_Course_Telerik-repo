'use strict';

function solve(args){
    var n = parseInt(args),
        str = "";
    for(var i = 1; i <= n; i += 1) {
        str += i + ' ';
    };
    return str;
}

var arr = ['10'];
console.log(solve(arr));
