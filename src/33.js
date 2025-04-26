// Node.js example for calculating factorial of a number

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  while (n > 1) {
    result *= n--;
  }
  return result;
}

// Example usage:
console.log(factorial(5)); // Output: 120
