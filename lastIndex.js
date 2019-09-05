function lastIndexOf (arr, val) {
  let ind = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      ind = i;
    }
  }
  return ind;
}


console.log(lastIndexOf([], 3));