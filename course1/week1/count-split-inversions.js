
function countInversions(list) {
  if (list.length == 1) {
    return {
      list: list,
      count: 0
    }
  }

  var half = Math.floor(list.length / 2);
  var left = list.slice(0, half);
  var right = list.slice(half);


  var invsLeft = countInversions(left);
  var invsRight = countInversions(right);

  left = invsLeft.list;
  right = invsRight.list

  var i = 0,
    j = 0,
    inversions = 0;
  var result = [];
  for (var iter = 0; i < left.length, j < right.length; iter++) {
    if (left[i] <= right[j]) {
      result.push(left[i])
      i++;
    } else {
      inversions += left.length - i;
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return {
    list: result,
    count: inversions + invsLeft.count + invsRight.count
  }
}

console.log(countInversions([5, 4, 3, 2, 1]));
