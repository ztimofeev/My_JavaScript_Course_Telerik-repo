function solve(args) {
    var a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        area = a * b,
        perimeter = (a + b) * 2;
    console.log(area.toFixed(2) + ' ' + perimeter.toFixed(2));
}