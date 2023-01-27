// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes.
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter, Return the number of different transformations among all words we have.

const codes = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

function uniqueWords(words) {
  // create an array of arrays that contains each letter split in each word
  const split = words.map((word) => word.split(""));
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    // replace the letters with their morse code values
    arr.push(split[i].map((letter) => codes[letter]).join(""));
  }
  // filter the array of morse code values to only include unique morse code combinations and return the length of that array
  console.log([...new Set(arr)].length);
}

uniqueWords(["gin", "zen", "gig", "msg"]);
uniqueWords(["a"]);
