function sum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sum([1, 2, 3, 4, 5])); // Output: 15
