/*
Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number
is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:

    Zero is even.

    One is odd.

    For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and
return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to
fix this?
*/


// My code
function isEven(x) {
  if (x === 0) {
    return true;
  } else if (x === 1) {
    return false;
  } else {
    return isEven(x - 2);
  }
}


// Tests
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