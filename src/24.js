function multiply(x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    throw new Error('Inputs must be integers.');
  }
  
  return x * y;
}

console.log(multiply(3, 5));
