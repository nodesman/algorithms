var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var numbers = line.split(' ');
    numbers = numbers.map(function (i) {
      return parseInt(i);
    });
    console.log(lcm(numbers[0], numbers[1]));
    process.exit();
  }
}

function lcm(a, b) {
  return (a * b / gcd(a, b))
}

function gcd(a, b) {
  if (b === 0 ) {
    return a;
  }
  if (a === 0) {
    return b;
  }

  if (a > b) {
    return gcd(b, a % b)
  }
  return gcd(a, b % a);
}
