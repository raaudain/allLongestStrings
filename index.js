// Given an array of strings, return another array containing all of its longest strings.


function allLongestStrings(inputArray) {
    const longest = [];
    const sorted = inputArray.sort((a,b) => b.length - a.length);
    
    for (let i of inputArray) {
        if (sorted[0].length === i.length) {
            longest.push(i);
        }
    }
    
    return longest;
}