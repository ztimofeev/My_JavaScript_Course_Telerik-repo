'use strict';

function solve(args) {
    var num = (parseInt(args)).toString(2),
        len = num.length;
        if (len > 3) {
            console.log(num[len-4]);
        } else {
            console.log(0);
        }; 
};
var arr = ['15'];

solve(arr);
