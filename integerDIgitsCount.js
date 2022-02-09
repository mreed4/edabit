// https://stackoverflow.com/a/28203456

const count = (n) => {
  let result;
  if (n === 0) {
    result = 1;
  } else {
    result = Math.ceil(Math.log10(Math.abs(n)));
  }
  return result;
};

let test = count(318);
test = count(-314890);

console.log(test);
