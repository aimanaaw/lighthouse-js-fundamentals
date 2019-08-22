function laugh(num) {
  var x = "!";
  for (var i = num; i > 0; i -= 1) {
    x = "ha" + x;
  }
  return x;
}

console.log(laugh(5));

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);