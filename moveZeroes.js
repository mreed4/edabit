const moveZeros = (arr) => {
  let arr1 = arr.filter((n) => n !== 0);
  let arr2 = arr.filter((n) => n === 0);
  return arr1.concat(arr2);
};

let test = moveZeros([1, 0, 1, 2, 0, 1, 3]);
test = moveZeros(["a", 0, 0, "b", "c", "d", 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]);

console.log(test);
