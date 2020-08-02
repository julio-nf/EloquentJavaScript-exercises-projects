//My code
function arrayToList(array) {
  let list = null;
  for (let element = array.length - 1; element >= 0; element--) {
    list = {
      value: array[element],
      rest: list
    };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {
    value,
    rest: list
  };
}

function nth(list, position) {
  if (position != 0 && list.rest == null) return undefined;
  else if (position == 0) return list.value;
  else return nth(list.rest, position - 1);
}

//Tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20