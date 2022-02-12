const showdown = (p1, p2) => {
  let test1 = p1.indexOf("B") < p2.indexOf("B");
  let test2 = p1.indexOf("B") === p2.indexOf("B");
  if (test2) return "tie";
  return test1 ? "p1" : "p2";
};

let test = showdown("               Bang! ", "             Bang!   ");

console.log(test);
