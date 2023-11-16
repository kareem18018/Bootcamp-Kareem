function memoize(expensiveOperationFn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] === undefined) {
            cache[key] = expensiveOperationFn(...args);
        }
        return cache[key];
    };
}
function expensiveOperation(x, y) {
    return x + y;
  }
  const memoizedExpensiveOperation = memoize(expensiveOperation);
console.log(memoizedExpensiveOperation(2,5));
