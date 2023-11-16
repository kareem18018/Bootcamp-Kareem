
let numbers = [-20, 50, 70, -30, 80, -10];

let sumOfPositives = numbers.reduce((sum, number) => {
  if (number > 0) {
    return sum + number;
  }
  return sum;
}, 0);

console.log(sumOfPositives);
