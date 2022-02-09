function createID(first, last) {

    let firstInitial = first[0].toLowerCase();

    let partialLast = last[0].toUpperCase() +
        last.toLowerCase().substring(1, 3);

    return firstInitial + partialLast;

}