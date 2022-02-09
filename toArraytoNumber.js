const toArray = (num) => {
  return [...num.toString()].map((n) => +n);
};

const toNumber = (arr) => {
  return +arr.join("");
};

let test = toArray(235);
test = toNumber([2, 3, 5]);

console.log(test);
