const parseArray = (arr) => {
  if (arr.length === 0) return [];
  return arr.map((n) => n.toString());
};

let test = parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]);

console.log(test);
