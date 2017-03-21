'use strict';

function solve(args){
    var a = parseFloat(+args[0]),
        b = parseFloat(+args[1]),
        c = parseFloat(+args[2]),
        x1 = 0,
        x2 = 0,
        d = b*b - 4*a*c;
    if (d < 0) {
        return 'no real roots';
    } else if (d === 0) {
        x1 = -b / (2 * a);
        return 'x1=x2=' + x1.toFixed(2);
    } else {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        if (x1 < x2){
            return 'x1=' + x1.toFixed(2) + '; ' + 'x2=' + x2.toFixed(2);
        } else {
            return 'x1=' + x2.toFixed(2) + '; ' + 'x2=' + x1.toFixed(2);
        };
    };
};

var arr = ['0.2', '9.572', '0.2'];
console.log(solve(arr));