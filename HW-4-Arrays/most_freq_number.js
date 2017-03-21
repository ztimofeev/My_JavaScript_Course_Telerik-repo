'use strict';

function solve(args){
    args.slice(0, 1);
    let maxCount = 0;
    for (let i = 0; i < args.length; i += 1){
        let count = 1;
        for (let j = i + 1; j < args.length; j += 1){
            if (args[i] === args[j]){
                count += 1;
            }
        }
        if (maxCount < count){
            maxCount = count;
            var x = +args[i];

        }
    }
    console.log(`${x}` +' (' +`${maxCount}` + ' times)');
}

let arr =['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'];
solve(arr);