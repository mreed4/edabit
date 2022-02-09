const addUpTo = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

let test = addUpTo(7);

console.log(test);
