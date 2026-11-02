// Find max in an array using recursion

function findMax(arr, n){
    // Base condition -> the smallest input -> array is of size = 1
    if(n === 1) return arr[0];

    // split the current element/index from the array/string (current is n = 3)
    let last = arr[n-1];

    // remaining array/string
    let ans = findMax(arr, n-1);

    // return the cummulative result
    return Math.max(ans, last);

}

const arr = [4, 20, 10, 50, 5];

const result = findMax(arr, arr.length)

console.log("Maximum number is:", result);
