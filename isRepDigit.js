function isRepdigit(num) {

    let arr = [...String(num)];
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i] === arr[arr.length - 1]);
    }

    return !(arr2.includes(false));
}

console.log(isRepdigit(66));