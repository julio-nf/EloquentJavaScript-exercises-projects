/*
Reversing an array

Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies the
array given as argument by reversing its elements. Neither may use the standard
reverse method.

Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster?
*/

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