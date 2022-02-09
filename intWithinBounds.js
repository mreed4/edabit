function intWithinBounds(n, lower, upper) {
    if (Number.isInteger(n)) {
        return (n <= lower || n < upper);
    } else {
        return false;
    }
}