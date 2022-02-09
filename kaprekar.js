const kaprekar = n => {

    // Pirate ("arr") the given num
    let nArr = [...String(n)];


    // Conditionally add leading zeros
    while (nArr.length < 4) {
        nArr.unshift('0');
    }


    // Test for repdigit
    let isRepDigit =
        nArr[0] === nArr[1] &&
        nArr[1] === nArr[2] &&
        nArr[2] === nArr[3] &&
        nArr[3] === nArr[0];

    if (isRepDigit) {
        console.log(`Error, n cannot be a repdigit.`);
        return;
    }


    // Rearrange digits in given num
    let largest = nArr.sort((a, b) => b - a).join('');
    let smallest = nArr.sort((a, b) => a - b).join('');
    let calcDiff = largest - smallest;
    let showDiff = `${largest} - ${smallest} = ${calcDiff}`;

    // Recursion
    const g = z => {
        if (n === 6174) {
            return 1;
        } else {
            console.log(`Iteration Nr. x: ${showDiff}`);

            g(calcDiff);
        }
    }

    g(calcDiff)

}

let rand = Math.floor(Math.random() * 10000);

kaprekar(9998);