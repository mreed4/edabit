const squaresSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 2;
  }
  return sum;
};

let test = squaresSum(13);

console.log(test);
