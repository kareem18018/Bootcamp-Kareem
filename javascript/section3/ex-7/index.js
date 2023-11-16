function fibonacciNthNumber(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacciNthNumber(n - 1) + fibonacciNthNumber(n - 2);
    }
  }
const result=fibonacciNthNumber(6);
console.log(result);