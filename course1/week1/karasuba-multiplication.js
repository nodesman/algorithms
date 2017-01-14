
function sum() {
  var numbers = arguments.length;
  var largest = 0;

  //find the largest.
  for (var iter = 0; iter < numbers; iter++) {
    if (arguments[iter].length > arguments[largest].length) {
       largest = iter;
    }
  }

  var list = Array.prototype.slice.call(arguments);

  list = list.map(function (number) {
    return number.reverse();
  });

  var size = arguments[largest].length;
  var carryOver = 0;
  var sum = [];

  for (var iter =0; iter < size; iter++) {
    var subsum = 0;
    for (var j=0; j < list.length; j++) {
      if (undefined !== list[j][iter]) {
        subsum += list[j][iter];
      }
    }
    subsum += carryOver;
    var contributingDigit = subsum % 10;
    sum.push(contributingDigit);
    carryOver = Math.floor(subsum/10);
  }

  if (carryOver !== 0) {
    sum.push(carryOver);
  }

  sum = sum.reverse()
  return sum;
}

function s2n(a) {
  return a.map(function (item) {
    return parseInt(item);
  });
}

function multiplyIntegers(first, second) {

  if (!first) {
    console.log("Invalid input");
    process.exit();
    return;
  }
  console.log("F:", first, "S:",  second);

  if (first.length === 1 && second.length === 1) {
    var result = first[0] * second[0];
    result = result.toString().split('');
    result = result.map(function(item) {
      return parseInt(item);
    });
    return result;
  }

  //split the number in half
  var m = Math.floor(first.length / 2);

  var a = first.slice(0, m);
  var b = first.slice(m);
  var c = second.slice(0, m);
  var d = second.slice(m);

  var ab = multiplyIntegers(a, b);
  var cd = multiplyIntegers(c, d);

  var tene2m = tenE(2*m);
  var tenem = tenE(m);

  var ac = multiplyIntegers(a, c);
  var bd = multiplyIntegers(b, d);

  var acplusbd = sum(ac, bd);

  var result = sum(multiplyIntegers(tene2m, ab), multiplyIntegers(acplusbd, tenem), bd);

  return result;
}

function tenE(power) {
  var result = "1";
  for (var iter=0; iter < power; iter++) {
    result += "0";
  }
  result = result.split('');
  result = result.map(function (item) {
    return parseInt(item);
  })
  return result;
}

first  = "1234567890987654321"
second = "9876543212345678900"

var first = first.split('');
var second = second.split('');

first = first.map(function(item, index) {
  return parseInt(item);
});

second = second.map(function(item, index){
  return parseInt(item);
});

multiplyIntegers([1,2,3,4], [5,6,7,8]);