const howManyHundreds = function (num) {
  return (num - (num%100))/100;
}

console.log(howManyHundreds(520), "=?", 5);