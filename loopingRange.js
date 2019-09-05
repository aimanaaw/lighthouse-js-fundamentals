

function range (start, stop, step) {
  const r = ((stop - start) / step);
  let array = [];
  for (let i = 0; i <= r; i++) {
    let num = start + (step * i);
    array.push(num);
  }
  return array;
}


console.log(range(0, 10, 2));