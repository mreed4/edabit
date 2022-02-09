const findDifference = (arr1, arr2) => {
  let vol1 = arr1.reduce((a, b) => a * b);
  let vol2 = arr2.reduce((a, b) => a * b);
  return Math.abs(vol1 - vol2);
};

let test = findDifference([28, 16, 29], [7, 8, 17]);

console.log(test);
