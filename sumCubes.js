const sumOfCubes = (arr) => {
  if (arr.length === 0) return 0;
  let result = arr.map((n) => n ** 3).reduce((a, b) => a + b);
  return result;
};

let test = sumOfCubes([1, 5, 9]);

console.log(test);
