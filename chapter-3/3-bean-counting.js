//My code
function countBs(string) {
  return countChar(string, "B")
}

function countChar(string, letter) {
  let counterLetter = 0;
  for (let counter = 0; counter < string.length; counter++) {
    if (string[counter] === letter) {
      counterLetter++;
    }
  }
  return counterLetter;
}

//Tests
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4