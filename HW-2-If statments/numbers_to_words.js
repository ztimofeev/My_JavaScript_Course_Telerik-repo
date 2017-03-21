'use strict';

function solve(args){
    var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
        teens=['zero','one','two','three','four','five','six','seven','eight','nine', 'ten','eleven',
        'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
        num = parseInt(args), 
        num_str = args.toString(),
        first = 0, 
        second = 0,
        first_word = '',
        len = num_str.length;
    if (len === 1) {
        first_word = (teens[num_str[0]]).charAt(0).toUpperCase() + (teens[num_str[0]]).slice(1);
        return first_word;
    } else if (len === 2) {
        if (num < 20) {
            first_word = (teens[num]).charAt(0).toUpperCase() + (teens[num]).slice(1);
            return first_word;
        } else {
            first_word = (tens[num_str[0]]).charAt(0).toUpperCase() + (tens[num_str[0]]).slice(1);
            if (num_str[1] === "0") {
                return first_word;
            } else {
                return first_word + ' ' + teens[num_str[1]];
            }
        }
    } else if (len === 3) {
        first = Math.floor(num / 100);
        second = num - first * 100;
        first_word = teens[first].charAt(0).toUpperCase() + teens[first].slice(1);
        if (second == '00') {
            return first_word + ' hundred';
        } else if (num_str[1] === '1') {
            return first_word + ' hundred and ' + teens[second];
        } else if (num_str[1] === '0') {
            return first_word + ' hundred and ' + teens[num_str[2]];
        } else {
            if (num_str[2] === '0'){
                return first_word + ' hundred and ' + tens[num_str[1]];
            } else {
                return first_word + ' hundred and ' + tens[num_str[1]] + ' ' + teens[num_str[2]];
            }  
        };
    };
}

var arr = ['720'];
console.log(solve(arr));
