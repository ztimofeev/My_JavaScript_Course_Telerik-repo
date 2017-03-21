function solve(args) {
    var a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        h = parseFloat(args[2]),
        area = (a + b)/2 * h;
    return area.toFixed(7);
};

var arr = ['0.222', '0.333', '0.555'];
console.log(solve(arr));