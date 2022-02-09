const afterNMonths = (year, months) => {
  if (year === null || year === undefined) return "year missing";
  if (months === null || months === undefined) return "month missing";
  return year + Math.floor(months / 12);
};

let test = afterNMonths(2020, 24);
test = afterNMonths(1444, 60);

console.log(test);
