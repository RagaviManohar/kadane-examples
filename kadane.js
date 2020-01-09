const maxSequence = function(arr) {

    let curr_max = 0, max_so_far = 0;

    for (let i = 0; i < arr.length; i++) {
        curr_max = Math.max(0, curr_max + arr[i]);
        max_so_far = Math.max(curr_max, max_so_far);
    }
    return max_so_far;
}

console.log(maxSequence([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ])); // returns 6 : [4, -1, 2, 1]
console.log(maxSequence([ -2, -1, -3, -4, -1, -2, -1, -5, -4 ])); // returns 0
console.log(maxSequence([])); // returns 0
console.log(maxSequence([ 2, 1, 3, 4, 1, 2, 1, 5, 4 ])); // returns 23
console.log(maxSequence([ 3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4 ]));// returns 19
