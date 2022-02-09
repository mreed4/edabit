function rotateByOne(arr) {

    // Remove last element, save to value to be 
    // moved to front
    let rotate = arr.pop();

    // Move saved value to front
    arr.unshift(rotate);

    // Magic
    return arr;

}

rotateByOne([1, 2, 3, 4, 5]);