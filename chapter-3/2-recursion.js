//My code
function isEven(x) {
  if (x === 0) {
    return true;
  } else if (x === 1) {
    return false;
  } else {
    return isEven(x - 2);
  }
}

//Tests
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(3));
// → ??

/*
The third test doesn't work because we do not check for negative values, so it
makes infinite calls for isEven until we get the "Maximum call stack size
exceeded", to solve this we can check parameters passed to isEven to see if its
in the natural numbers or we could treat negative numbers as it were positive.
*/