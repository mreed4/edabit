const leftDigit = (str) => {
  return +str[str.indexOf(str.match(/[0-9]/))];
};
