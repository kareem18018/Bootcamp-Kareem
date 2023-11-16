

const mathOperations = require('./mathOperations');
const squareRoot = mathOperations.squareRoot;

function calculateEquation(a, b, c) {
  const discriminant = squareRoot(b * b - 4 * a * c);
  const root1 = (-b + discriminant) / (2 * a);
  const root2 = (-b - discriminant) / (2 * a);
  return { root1, root2 };
}

module.exports = {
  calculateEquation
};
