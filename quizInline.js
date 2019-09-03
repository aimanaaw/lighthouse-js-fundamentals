// function laugh(num) {
//   var x = "!";
//   for (var i = num; i > 0; i -= 1) {
//     x = "ha" + x;
//   }
//   return x;
// }

// console.log(laugh(5));

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function (num) {
  var x = "!";
  for (var i = num; i > 0; i -= 1) {
    x = "ha" + x;
  }
  return x;
}
)