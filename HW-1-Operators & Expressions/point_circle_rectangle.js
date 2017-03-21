'use strict';
function solve(args) {
    var x = parseFloat(args[0]),
        y = parseFloat(args[1]),
        z = Math.sqrt((x-1)*(x-1) + (y-1)*(y-1));
    if (z > 1.5){
        if (((x < -1) || (x > 5)) || ((y < -1) || (y > 1))){
            return 'outside circle outside rectangle'
        } else {
            return 'outside circle inside rectangle';
        }
    } else {
       if (((x < -1) || (x > 5)) || ((y < -1) || (y > 1))) {
           return 'inside circle outside rectangle';
       } else {
           return 'inside circle inside rectangle';
       }   
    }
}
var arr = ['3', '5'];

console.log(solve(arr));
