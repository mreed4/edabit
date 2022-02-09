function parseArray(arr) {

    // Weed out array length zero
    if (arr.length === 0) {
        return [];

    } else {

        // Map array to new array such that if the element is
        // a number, make it a string
        let arr2 = arr.map(n => {
            if (typeof n === "number") {
                return n.toString();
            } else {
                return n;
            }
        });
    }

    // Magic
    return arr2;

}

parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]);

/*
let m = 5;
console.log(typeof m);
*/