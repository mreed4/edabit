const societyName = (friends) => {
  let acronym = "";
  for (let name in friends) {
    acronym += friends[name][0];
  }
  return [...acronym].sort().join("");
};

let test = societyName(["Harry", "Newt", "Luna", "Cho"]);

console.log(test);
