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
    var max, secondmax;
    if (numbers[0] > numbers[1]) {
      max = numbers[0];
      secondmax = numbers[1];
    } else {
      max = numbers[1];
      secondmax = numbers[0];
    }

    for (var iter = 0; iter < numbers.length; iter++) {
      if (numbers[iter] > max) {
        secondmax = max;
        max = numbers[iter];
      }
    }

    greatest = max * secondmax;

    console.log(greatest);

    process.exit();
  }
}
