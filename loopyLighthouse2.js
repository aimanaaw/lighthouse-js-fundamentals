
// Syntax for generating the array of numbers
let numList = [];
let numFunc = function ([x,y]) {
  for (let n = x; n <= y; n++) {
    numList.push(n);
  };
  return numList;
};

function loopyLighthouse (numRange,multiples, words) {
  numFunc(numRange);
  
  let z = 0;
  let m1 = multiples[0];
  let m2 = multiples[1];
  let s1 = words[0];
  let s2 = words[1];
  while (z < numList.length) {
    if (numList[z] % m1 === 0 && numList[z] % m2 === 0) {
      console.log("BattyBeacon");
      z += 1;
    } else if (numList[z] % m1 === 0) {
      console.log("Batty");
      z += 1;
    } else if (numList[z] % m2 === 0) {
      console.log("Beacon");
      z += 1;
    } else {
      console.log(numList[z]);
      z += 1;
    }
  }
  
};

loopyLighthouse([15, 30], [2, 5], ["Batty", "Beacon"]);