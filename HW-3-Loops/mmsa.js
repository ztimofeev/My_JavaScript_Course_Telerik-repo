'use strict';

function solve(args){
    var min = parseFloat(args[0]),
        max = parseFloat(args[0]),
        sum = 0,
        len = args.length;
    for (var i = 0; i < len; i += 1) {
        var n = parseFloat(args[i]);
        sum = sum + n;
        if (min > n) {
            min = n;
        }
        if (max < n) {
            max = n;
        };
    };
    var avg = sum / len;
    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
};

var arr = ['2', '5', '1'];
solve(arr);