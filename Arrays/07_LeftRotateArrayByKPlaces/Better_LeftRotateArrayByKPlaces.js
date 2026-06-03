// Better approach : using an extra array
// [1,2,3,4,5]
// k = 2

// step 1 : save the first k elements
// temp = [1,2]

// step 2 : shift the remaining elements left
// [3,4,5,4,5]

// step 3 : put the saved elements at the end
// [3,4,5,1,2]

function LeftRotateArrayByKPlaces(arr, k){
    let n = arr.length;
    k = k % n;

    // Save
    // step 1 -> TC : O(k)
    let temp = arr.slice(0, k);

    // Shift
    // step 2 -> TC : O(n-k)
    for(let i = k; i < n; i++){
        arr[i - k] = arr[i];
    }

    // Restore
    // step 3 -> TC : O(k)
    for(let i = 0 ; i < k; i++){
        arr[n - k + i] = temp[i];
    }

    return arr;
}

let arr = [1,2,3,4,5,6]

console.log("Original Array : ", arr);


console.log(LeftRotateArrayByKPlaces(arr, 4));


// Overall TC : O(k + n - k + k) -> O(n + k) -> O(n) since k <= n
// Overall SC : O(k)

// Note:
// TC of slice(0, k) -> O(k)
// JS creates a new array and copies k elements into it

// Why is this not an optimal solution :
// because slice creates an extra array of size k. 
// So space is O(k)

// The original array already existed so we don't count it as extra space.

// Interview rule:
// For space complexity, count only additional memory created by your algorithm.
