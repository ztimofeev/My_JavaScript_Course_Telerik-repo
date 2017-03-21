'use strict';

function solve(args){
    var n = parseInt(args);
    for(var i = 1; i <= n; i += 1){
        var str = '';
        for(var j = i; j < n + i; j += 1){
            str += j + ' ';
        };
        console.log(`${str}`);
    };
}    

var arr = ['5'];
solve(arr);