const joinPath = (p1, p2) => {
  return p1.slice(0, p1.indexOf("/"));
  let s2 = p2.slice(p2.indexOf("/"));
};

let test = joinPath("portion1", "portion2");

console.log(test);
