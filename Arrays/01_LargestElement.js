// Largest Element in an Array

/*
    Will this work for:
        1. negative numbers
        2. empty inputs
        3. duplicates
        4. edge cases
*/

// 1. Brute Force Approach 
// Use sorting method -> TC (O(nlogn))

let arr = [2, 4, 7, 10, 90, -10, -8, 25]

arr.sort((a,b) => a-b)

// console.log(arr[arr.length-1]);


// 2. Optimal Approach -> TC O(n), SC O(1)
// keep track of the largest number while traversing
function largestElement(myArray){
    // handle empty array case
    if(!myArray.length){
        return -1;
    }

    // handle edge case -> if max = 0 then result = 0 in case of -ve numbers
    let max = myArray[0];

    // start from i = 1, because max already contains i = 0
    for(let i = 1; i <= myArray.length; i++){
        if(myArray[i] > max)
            max = myArray[i];
    }

    return max;
}

// let arr_2 = [2, 4, 7, 10, 90, -10, -8, 25]
// let arr_2 = [-2, -4, -7, -10, -90, -10, -8, -25]
// let arr_2 = []
let arr_2 = [2, 4, 7, 10, 90, -10, -8, 25, 7, 10]


largestElement = largestElement(arr_2);
console.log(largestElement);

// Question
// Why do we initialize max = arr[0] and not max = 0;
// array may contain negative numbers so if we do max = 0, so 
// the condition (-ve > 0) will fail everytime. and final answer will be 0.
// So best practice is to use max = arr[0]

// Pattern : Keep track while traversing
// Used in
// second largest
// minimum element
// stock buy/sell
// kadane's algo