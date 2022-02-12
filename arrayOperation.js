const arrayOperation = (x, y, n) => {
  let arr = [];
  for (let i = x; i <= y; i++) {
    if (i % n === 0) {
      arr.push(i);
    }
  }
  return arr;
};

let test = arrayOperation(15, 20, 7);
test = arrayOperation(7, 9, 2);
test = arrayOperation(1, 10, 3);

console.log(test);
