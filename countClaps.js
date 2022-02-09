function countClaps(str) {

    // Method 1 - Single line
    return str.split('').filter(n => n === `C`).length

    /*
        Method 1 - Multi-line

    // Split given string into an array
    let arr = str.split('');

    // Filter out the `C` characters into new array
    let arr2 = arr.filter(n => n === `C`);

    // Magic
    // All elements in this array will be `C`
    // Ergo, its length will be the count of `C`
    return arr2.length;

    /*
        Method 2 - Multi-line

    // Initialize counter
    let count = 0;

    // Split given string into an array
    let arr = str.split('');

    // Iterate though each element in the array
    // Increase counter by one for each instance of `C`
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === `C`) {
            count++;
        }
    }

    // Magic
    return count;
    */
}

countClaps("ClaClaClaClap!")