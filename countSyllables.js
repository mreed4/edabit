const countSyllables = (str) => {
  return [...str.toLowerCase()].filter((n) => n.match(/[aeiou]/g)).length;
};

let test = countSyllables("Hehehehehehe");

console.log(test);
