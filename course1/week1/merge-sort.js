indent = ""

function mergeSort(list) {
  indent += " "
  if (list.length < 2) {
    indent = indent.substring(0, indent.length - 2)
    return list;
  }
  if (list.length == 2) {
    if (list[0] > list[1]) {
      return [list[1], list[0]];
    } else {
      indent = indent.substring(0, indent.length - 2)
      return list;
    }
  }

  var leftHalf = list.slice(0, list.length / 2);
  var rightHalf = list.slice(list.length / 2);

  var sortedLeft = mergeSort(leftHalf);
  var sortedRight = mergeSort(rightHalf);

  var sortedList = [];
  for (var iter = 0; iter < list.length; iter++) {
    if (sortedLeft.length === 0 || sortedRight.length === 0) {
      indent = indent.substring(0, indent.length - 2)
      var sortedList = sortedLeft.concat(sortedRight).concat(sortedList);
      return sortedList;
    }
    var pushed = (sortedLeft[sortedLeft.length - 1] > sortedRight[sortedRight.length -
      1]) ? sortedLeft.pop() : sortedRight.pop();

    sortedList.unshift(pushed);
  }
  indent = indent.substring(0, indent.length - 2)
  return sortedList;
}

function bubble(list) {
  for (var iter = 0; iter < list.length; iter++) {
    for (var j = iter; j < list.length; j++) {
      if (list[j] > list[iter]) {
        tmp = list[iter];
        list[iter] = list[j]
        list[j] = tmp;
      }
    }
  }

  return list;
}

var l = [4, 5, 2, 7, 3, 5, 2, 8, 9, 0, 1];

console.time("bub");
console.log(bubble(l));
console.timeEnd("bub");

console.time("sort");
console.log(mergeSort(l));
console.timeEnd("sort");
// console.log(mergeSort([2, 7, 3]));
