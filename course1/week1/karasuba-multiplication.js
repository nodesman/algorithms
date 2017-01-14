

function multiplyIntegers(first, second) {

  if (first.length === 1 && second.length === 1) {
    return first[0] * second[0];
  }

  //split the number in half
  var m = Math.floor(first.length / 2);

  var a = first.slice(0, m);
  var b = first.slice(m+1);
  var c = second.slice(0, m);
  var d = second.slice(m+1);

  console.log(a, b, c, d);
}

first  = "1234567890987654321"
second = "9876543212345678900"

console.log(multiplyIntegers(first, second));
