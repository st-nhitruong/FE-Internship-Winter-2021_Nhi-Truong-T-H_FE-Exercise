// ### Playground
// 1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// ```
// Input: a = 5, b = 10
// Output: 15

// Input: a = 5, b = 5
// Output: 30
// ```
function sumNumber(val1, val2) {
    if (val1 === val2) {
        return (val1 + val2) * 3;
    }
    else
        return val1 + val2;
}
// console.log(sumNumber(3,5))
// 2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

// ```
// Input: a = 12
// Output: 7

// Input: a = 19
// Output: 0

// Input: a = 22
// Output: 9
// ```
function diff(a) {
    if (a > 19) {
        return (a - 19) * 3;
    }
    else
        return 19 - a;
}
// console.log(diff(3))

// 3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.

// ```
// Input: a = '1*9'
// Output: ['129', '159', '189']
// ```

// ```
// Input: a = '1234567890*'
// Output: ['12345678900', 
//  '12345678903', 
//  '12345678906', 
//  '12345678909']
// ```
function findNumbers(str,a){
    var arr =[];
    for(var i = 0; i <10; i++) {
        if(str.replace("*",i) % a === 0){
            arr.push(str.replace("*",i));
        }
    }
    return arr;
}
console.log(findNumbers('1234567890*',3))
// 4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

// ```
// Input: a = '1*9'
// Output: []
// ```

// ```
// Input: a = '1234567890*'
// Output: ['12345678900', 
//  '12345678906']
// ```
function findNumbers(str,a){
    var arr =[];
    for(var i = 0; i <10; i++) {
        if(str.replace("*",i) % a === 0){
            arr.push(str.replace("*",i));
        }
    }
    return arr;
}
console.log(findNumbers('1234567890*',6))