const charCount = (myChar, str) => {
    let count = [...str].filter((n) => n === myChar).length;
    console.log(count);
    return count;
};

charCount("c", "Chamber of secrets");
