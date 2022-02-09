const greetPeople = (names) => {
  let greeting = "";
  if (names.length === 0) {
    return greeting;
  } else {
    for (let i in names) {
      greeting += `Hello ${names[i]}, `;
    }
    return greeting.slice(0, greeting.length - 2);
  }
};

let test = greetPeople(["Frank", "Angela", "Joe"]);

console.log(test);
