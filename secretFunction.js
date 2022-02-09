function secret(text) {
  let separator = text.indexOf("*");
  let element = text.slice(0, separator);
  let count = text.slice(separator + 1);
  let html = `<${element}></${element}>`;
  return html.repeat(count);
}

let test = secret("div*2");
test = secret("li*3");

console.log(test);
