// Recursive Fibonacci function without caching
function fib1(n) {
    if (n <= 1) {
      return 1;
    }
    return fib1(n - 1) + fib1(n - 2);
  }

  // Recursive Fibonacci function with caching (memoization)
  function fib2(n, memo = {}) {
    if (n <= 1) {
      return 1;
    }

    if (memo[n]) {
      return memo[n];
    }

    memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
    return memo[n];
  }

  // Iterative Fibonacci function
  function fib3(n) {
    if (n <= 1) {
      return 1;
    }

    let fibArr = [1, 1];
    for (let i = 2; i <= n; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }

    return fibArr[n];
  }

  // Function to measure the execution time of another function
  function measureTime(fn, ...args) {
    const start = process.hrtime();
    const result = fn(...args);
    const end = process.hrtime(start);
    const duration = end[0] * 1e3 + end[1] * 1e-6; // Convert to milliseconds

    return { result, duration };
  }

  // Program to use the Fibonacci functions and measure time
  const inputNumber = parseInt(process.argv[2]);

  // Ensure the input is a valid positive integer
  if (isNaN(inputNumber) || inputNumber < 0) {
    console.error('Please provide a valid positive integer as a command line argument.');
    process.exit(1);
  }

  console.log(`Calculating Fibonacci for n = ${inputNumber}`);

  // Measure time for each Fibonacci function
  const { result: fib1Result, duration: fib1Duration } = measureTime(fib1, inputNumber);
  const { result: fib2Result, duration: fib2Duration } = measureTime(fib2, inputNumber);
  const { result: fib3Result, duration: fib3Duration } = measureTime(fib3, inputNumber);

  // Print results
  console.log(`Result (fib1): ${fib1Result}, Duration: ${fib1Duration} ms`);
  console.log(`Result (fib2): ${fib2Result}, Duration: ${fib2Duration} ms`);
  console.log(`Result (fib3): ${fib3Result}, Duration: ${fib3Duration} ms`);
