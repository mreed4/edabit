const oddProduct = (arr) => {
  return arr.filter((n) => n % 2 !== 0).reduce((a, b) => a * b);
};

let test = oddProduct([3, 4, 1, 1, 5]);

console.log(test);
