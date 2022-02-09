const countClaps = (str) => {
  return str.split("").filter((n) => n === `C`).length;
};

countClaps("ClaClaClaClap!");
