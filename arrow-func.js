// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     })

const double = arr => arr.map(val=> val * 2);

// Refactor the following function to use arrow functions:
// Replace ALL functions with arrow functions:

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   } 

const squareAndFindEvans = numbers=> numbers.map(num => num ** 2).squares.filter(square => square % 2 === 0)
