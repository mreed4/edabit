const convertCartesian = (x, y) => {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push([x[i], y[i]]);
  }
  return arr;
};

const test = convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]);

console.log(test);
