//My code
function reverseArray(array) {
  let reversedArray = [];
  for (let counter = array.length - 1; counter >= 0; counter--) {
    reversedArray.push(array[counter]);
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
  let aux;
  for (let counter = 0, counter2 = array.length - 1;
           counter <= Math.ceil(array.length/2 - 1);
           counter++, counter2--) {
    aux = array[counter2];
    array[counter2] = array[counter];
    array[counter] = aux;
  }
}

//Tests
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


/* Thinking of side effects and pure functions, the first function is useful in
more situations because it is a pure function and because of that we dont have
to "prepare" an array the way that second function needs to work properly nor
we have unwanted modifications on our original array; we just pass an array and
get a reversed copy of that. */