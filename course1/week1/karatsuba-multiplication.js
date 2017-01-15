
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

  list = list.map(function (item) {
    return item.slice();
  })

  list.forEach(function (number) {
    number.reverse();
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
    var carryover = carryOver.toString().split('').map(function (item) { return parseInt(item); }).reverse();
    sum = sum.concat(carryover);
  }

  sum = sum.reverse()
  return sum;
}

function s2n(a) {
  return a.map(function (item) {
    return parseInt(item);
  });
}

function zeroPad(number, digits) {
  number = number.reverse();

  if (number.length < digits) {

    var original_length = number.length;
    var topad = digits - original_length;
    for (var iter = 0; iter < topad; iter++) {
      number.push(0);
    }
  }
  number = number.reverse();
  return number;
}

function lowerIndent() {
  indent = indent.split('').splice(1).join('');
}
var indent = "";

function exit() {
  process.exit();
}


function multiplyIntegers(first, second) {

  indent += " ";

  // console.log(indent, first, second);

  while (first[0] == 0 && first.length !== 1) {
    first.shift();
  }

  while (second[0] == 0 && second.length !== 1) {
    second.shift();
  }

  var fs = first.join('');
  var ss = second.join('');

  if (fs === '10' && ss.length == 1 || ss === '10' && fs.length == 1) {
    fs = parseInt(fs);
    ss = parseInt(ss);
    result = fs * ss;
    result = result.toString().split('')
    result = result.map(function(item) {
      return parseInt(item);
    })
    lowerIndent();
    // console.log(indent, first, 'x', second, " = ", result);
    return result;
  }

  if (first.length === 1 && first[0] == 0 || second.length == 1 && second[0] == 0) {
    lowerIndent();
    // console.log(indent,first, 'x', second, " = ", [0]);
    return [0];
  }

  if (first.length == 1 && second.length == 1) {
    var result = first[0] * second[0];
    result = result.toString().split('');
    result = result.map(function(item) {
      return parseInt(item);
    });
    lowerIndent();
    // console.log(indent,first, 'x', second, " = ", result);
    return result;
  }

  //which is longer?
  var length = first.length > second.length ? first.length: second.length;
  var m = Math.floor(length / 2);
  console.log(indent, "m:", m);
  var first = zeroPad(first, length);
  var second = zeroPad(second, length);

  var a = first.slice(0, m);
  var b = first.slice(m);
  var c = second.slice(0, m);
  var d = second.slice(m);

  var ac = multiplyIntegers(a, c);
  var bd = multiplyIntegers(b, d);

  var tene2m = tenE(2*m);
  var tenem = tenE(m);

  var ad = multiplyIntegers(a, d);
  var bc = multiplyIntegers(b, c);

  var acplusbd = sum(ad, bc);


  var f = multiplyIntegers(tene2m, ac), d = multiplyIntegers(acplusbd, tenem), s = bd;
  console.log(indent, acplusbd, tenem, "10e("+m+")", d)

  var result = sum(f,d,s);

  lowerIndent();
  // console.log(indent,first, 'x', second, " = ", result);
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

// console.log(multiplyIntegers([1], [1,0,9,9]))
console.log(multiplyIntegers([1,0], [1,0,0]))

// for (var iter = 0; iter < 2000; iter++) {
//   for (var  subiter= 0; subiter < 2000; subiter++) {
//
//     var a = iter;
//     var b = subiter;
//
//     var res = multiplyIntegers(a.toString().split(''), b.toString().split(''))
//
//     var result = parseInt(res.join(''));
//
//     console.log(result);
//     if (result !== a*b) {
//       console.log(a, " x ",b)
//     }
//
//   }
// }
