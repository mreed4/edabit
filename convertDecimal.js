const convertToDecimal = (arr) => {
  return arr.map((n) => +n.replace("%", "") / 100);
};

let test = convertToDecimal(["1%", "2%", "3%"]);

console.log(test);
