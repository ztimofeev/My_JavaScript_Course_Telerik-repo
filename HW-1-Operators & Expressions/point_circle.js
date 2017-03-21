'use strict';
function solve(args) {
    var x = parseFloat(+args[0]),
        y = parseFloat(+args[1]),
        z = Math.sqrt(x*x + y*y);
    if (z > 2) {
        console.log('no ' + z.toFixed(2));
    } else {
        console.log('yes ' + z.toFixed(2));
    }
}
var arr = ['1', '1.655'];

solve(arr);
