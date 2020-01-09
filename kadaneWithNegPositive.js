
/* If the solution specifically requires,
    that if the list is made up of only negative numbers or an empty list is given,
    zero should be returned - then few more lines can be added to explicitly take care of that.
*/

let allPositives = arr => arr.every(n => n > 0)
let allNegatives = arr => arr.every(n => n < 0)
let sum = arr => arr.reduce((curr_max, max_so_far) => curr_max + max_so_far, 0)

const kadaneWithNegPositive = function(arr) {
    if (arr.length === 0 || allNegatives(arr)) {
        return 0;
    }
    if (allPositives(arr)) {
        return sum(arr);
    }

    let curr_max = 0, max_so_far = 0;

    for (let i = 0; i < arr.length; i++) {
        curr_max = Math.max(0, curr_max + arr[i]);
        max_so_far = Math.max(curr_max, max_so_far);
    }
    return max_so_far;
}

console.log(kadaneWithNegPositive([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ])); // returns 6 : [4, -1, 2, 1]
console.log(kadaneWithNegPositive([ -2, -1, -3, -4, -1, -2, -1, -5, -4 ])); // returns 0
console.log(kadaneWithNegPositive([])); // returns 0
console.log(kadaneWithNegPositive([ 2, 1, 3, 4, 1, 2, 1, 5, 4 ])); // returns 23
console.log(kadaneWithNegPositive([ 3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4 ]));// returns 19
