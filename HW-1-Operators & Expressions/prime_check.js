function solve(args) {
    var num = parseInt(args),
        max_dev =  Math.floor(Math.sqrt(num));
    if (num < 2) {
       return('false');
    } else {
        for (i = 2; i <= max_dev; i += 1) {
            if (num % i === 0) {
                return('false');
            } 
        };
        return('true'); 
    };
};

var arr = ['83'];
console.log(solve(arr));