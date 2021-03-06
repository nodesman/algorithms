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

  var s = 0, l = 1, c;

  for (var iter = 2; iter <= number; iter++) {
    c = s + l;
    c = c %10;
    s = l;
    l = c;
  }

  return c;
}
