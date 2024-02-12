function every(array, interval = 1, start_index = 0) {
    const result = [];
    for (let i = start_index; i < array.length; i += interval) {
        result.push(array[i]);
    }
    return result;
}

// Test cases
console.log(every([0,1,2,3,4]));        // [0,1,2,3,4]
console.log(every([0,1,2,3,4], 1));     // [0,1,2,3,4]
console.log(every([0,1,2,3,4], 2));     // [0,2,4]
console.log(every([0,1,2,3,4], 3));     // [0,3]
console.log(every([0,1,2,3,4], 1, 3));  // [3,4]
console.log(every([0,1,2,3,4], 3, 1));  // [1,4]
console.log(every([0,1,2,3,4], 3, 4));  // [4]
