function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}


function buildTriangle(length) {
  var t = "";
  for (var x = 1; x <= length; x += 1) {
    t = t + makeLine(x);
  }
  return t;
}

console.log(buildTriangle(10));