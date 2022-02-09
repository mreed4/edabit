const moodToday = (mood) => {
  let result;
  if (mood === null || mood === undefined) {
    result = `Today, I am feeling neutral`;
  } else {
    result = `Today, I am feeling ${mood}`;
  }
  return result;
};

let test = moodToday();

console.log(test);
