// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

function countJewels(jewels, stones) {
  let count = 0;
  // loop through the letters of both strings and compare the letters to each other
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      // increment count when matches are found
      if (stones[i] === jewels[j]) {
        count++;
      }
    }
  }
  // return the count of all matches
  console.log(count);
}

countJewels("aA", "aAAbbbb");
countJewels("z", "ZZ");
countJewels("aVeE", "apmvqRWRINadgfplEngdAV")
