//My code
function range(start, end, step = 1) {
  let array = [];
  while (step > 0 ? start <= end : start >= end) {
    array.push(start);
    start += step;
  }
  return array;
}

function sum(array) {
  let sum = 0;
  for (let element of array) {
    sum += element;
  }
  return sum;
}

//Tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
