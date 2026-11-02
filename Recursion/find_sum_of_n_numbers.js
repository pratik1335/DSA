// Sum of n numbers using recursion

function findSum(n){
    // Base condtion -> smallest input -> n = 1
    if(n === 1) return 1;

    // split the current element
    let last = n;

    // remaining numbers
    let ans = findSum(n-1);  // hope that someone will provide its answer

    return last + ans; // sum of last and ans

}

const result = findSum(99);

console.log(`Sum is:`, result);
