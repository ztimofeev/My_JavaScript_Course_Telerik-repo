'use strict';

function solve(args){
    var biggest = parseFloat(args[0]);
    for (var i = 1; i < 5; i += 1){
        if (parseFloat(args[i]) > biggest){
            biggest = args[i];
        };
    };
    return biggest;
};

var arr =['-2', '4', '3', '2', '0'];
console.log(solve(arr));