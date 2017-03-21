function solve(args) {
    var str = args.toString(),
        len = str.length;
    if (len > 2) {
        thirdDigit = +str[len-3];
        if (thirdDigit === 7) {
            console.log('true');
        } else {
            console.log('false ' + thirdDigit);
        };
    } else {
        console.log('false 0');
    };
};

var num = 1340987656788;
solve(num)