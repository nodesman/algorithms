var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var parts = line.split(' ');
    number = parts[0];
    m = parseInt(parts[1]);
    console.log(nthFibo(number, m));
    process.exit();
  }
}

function nthFibo(number, m) {
  var s = 0, l = 1, c = 1;
  for (var iter = 2; iter < number; iter++) {
    c = s + l;
    s = l;
    l = c;
  }
  console.log(c, m);
  return c % m;
}
