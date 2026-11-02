// find factorial of a given number using recursion

function findFactorial(n){

    // Base case -> smallest input -> n = 1
    if(n === 1) return 1;

    let last = n;

    let ans = findFactorial(n-1);

    return ans * last;
}

const result = findFactorial(10);

console.log(result);
