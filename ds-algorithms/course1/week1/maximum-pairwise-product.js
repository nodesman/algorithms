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

    var greatest = numbers[0] * numbers[1];

    for (var i = 0; i < numbers.length; i++) {
      for (var j = i+1; j < numbers.length; j++) {
        var product = numbers[i] * numbers[j];
        if (product > greatest) {
          greatest = product;
        }
      }
    }

    console.log(greatest);

    process.exit();
  }
}
