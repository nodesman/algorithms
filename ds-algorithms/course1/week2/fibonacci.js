var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var number = parseInt(line);

    console.log(nthFibo(number));

    process.exit();
  }
}

function nthFibo(number) {

  var array = [0, 1];

  if (number < 2) {
    return array[number]
  }

  for (var iter = 2; iter <= number; iter++) {
    array[iter] = array[iter-1] + array[iter-2];
  }

  return array[iter-1];
}
