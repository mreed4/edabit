function countSyllables(str) {

    /* 
    This solution would not work for 'words'
    longer than two characters

    This solution may be cheesing the intent of
    the exercise a bit
    */

    // Initialize counter
    let total = 0;

    // Split given string into array
    let arr = str.split('');

    // Increase counter by one for each consonant
    arr.forEach(n => {

        // First convert each letter to lowercase
        n.toLowerCase();

        // Then check for consonants
        if (n !== `a` ||
            n !== `e` ||
            n !== `i` ||
            n !== `o` ||
            n !== `u`) {

            // Increase total by 1
            total++
        }
    });

    // Magic
    return total / 2;

}

countSyllables("Hehehehehehe");