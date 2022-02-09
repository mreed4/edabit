function count(number) {

    // Get absolute value of number
    number = Math.abs(number);

    // Convert it to a string
    let str = String(number);

    // Return its length
    return str.length;

    /*
    Alternate solution
    */

    // Initialize counter
    let count = 0;

    // Make given number its absolute value
    number = Math.abs(number);

    // Make the number a string
    str = String(number);

    // Split the string to an array
    let arr = str.split('');

    // Increase counter
    arr = arr.forEach(n => {
        Number(n);
        if (n) {
            count++;
        }
    });

    // Magic
    return count;
}

count(318);
count(-314890);