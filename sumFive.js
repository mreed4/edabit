function sumFive(arr) {
  let sum = 0;
  for (let i in arr) {
    if (arr[i] > 5) {
      sum += arr[i];
    } else {
      sum += 0;
    }
  }
  return sum;
}

let test = sumFive([1, 2, 3, 4]);

console.log(test);
