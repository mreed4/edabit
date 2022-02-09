const getFillings = (arr) => {
  return arr.slice(1, arr.length - 1);
};

let test = getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]);

console.log(test);
