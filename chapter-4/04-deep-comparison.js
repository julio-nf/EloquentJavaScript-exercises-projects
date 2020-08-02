//My code
function deepEqual(x, y) {
  if (typeof x == "object" && typeof y == "object" &&
      x != null && y != null) {

    let xKeys = Object.keys(x),
        yKeys = Object.keys(y);

    if (xKeys.length != yKeys.length) return false;

    for (let element of xKeys) {
      if (!yKeys.includes(element) ||
          !deepEqual(x[element], y[element])) return false;
    }

    return true;

  } else return x === y;
}

//Tests
let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true