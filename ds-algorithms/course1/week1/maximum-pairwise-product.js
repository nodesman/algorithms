var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

var number = 0;

function readLine (line) {
  if (line !== "\n") {

    if (number === 0) {
      number = parseInt(line);
      return;
    }

    var numbers = line.toString().split(' ');
    var numbers = numbers.map(function (i) {
      return parseInt(i);
    });

    //find maximum and second largest
    // var max, secondmax;
    // if (numbers[0] > numbers[1]) {
    //   max = numbers[0];
    //   secondmax = numbers[1];
    // } else {
    //   max = numbers[1];
    //   secondmax = numbers[0];
    // }
    //
    // for (var iter = 0; iter < numbers.length; iter++) {
    //   if (numbers[iter] > max) {
    //     secondmax = max;
    //     max = numbers[iter];
    //   }
    // }

    var greatest = maximumPairwiseProduct(numbers);
    console.log(greatest[0]);
    process.exit();
  }
}



// function maximumPairwiseSlow(numbers) {
//   var pair = [];
//   var maxProduct = numbers[0] * numbers[1];
//   for (var i = 0; i < numbers.length; i++) {
//     for (var j = i+1; j < numbers.length; j++) {
//       var currentProduct = numbers[i] * numbers[j];
//       if (maxProduct < currentProduct) {
//         maxProduct = currentProduct;
//         pair = [numbers[i], numbers[j]];
//       }
//     }
//   }
//   return [maxProduct, pair];
// }
//
function maximumPairwiseProduct(list) {
  numbers = list.slice();
  numbers.sort(function (i, j) {
    if (i === j) {
      return 0;
    }
    else if (i < j) {
      return -1;
    } else {
      return 1;
    }
  });
  var largest = numbers.pop(), secondlargest = numbers.pop();
  greatest = largest * secondlargest;
  return [greatest, [largest, secondlargest]];
}
//
//
// // var greatest = maximumPairwiseSlow(numbers);
//
// for (var i = 2; i < 200000; i++) {
//   var list = []
//   for (var iter = 0; iter < i; iter++) {
//     list.push(Math.ceil(200000 * Math.random()));
//   }
//
//
//   var greatestS = maximumPairwiseSlow(list);
//
//   if (greatest[0] !== greatestS[0]) {
//     console.log(greatest[0], " !== ", greatestS[0]);
//     console.log("Maximum pair slow: ", greatestS[1]);
//     console.log("Maximum pair fast: ", greatest[1]);
//     console.log("Wrong!", list);
//     process.exit();
//   }
// }

// console.log(greatest);
