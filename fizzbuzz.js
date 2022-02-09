const FizzBuzz = (n) => {
  let mod3 = n % 3 === 0;
  let mod5 = n % 5 === 0;
  let result;
  if (mod3 && mod5) {
    result = "FizzBuzz";
  } else if (mod3) {
    result = "Fizz";
  } else if (mod5) {
    result = "Buzz";
  } else {
    result = `${n}`;
  }
  return result;
};

let test = FizzBuzz(10);

console.log(test);
