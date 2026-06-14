// Optimal Approach : Using Reverse function

// Steps:
// 1. Reverse first k elements
// 2. Reverse remaining elements
// 3. Reverse the whole array

// TC : O(n)
// Space : O(1)

// TC : O(n/2) = O(n)
function reverse(arr, left, right){
    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}

function LeftRotateArrayByKPlaces(arr, k){

    let n = arr.length;

    k = k % n;

    // TC : O(k)
    let revK = reverse(arr, 0, k-1);
    // console.log("Array becomes : ", revK);
    
    // TC : O(n-k)
    let revNext = reverse(arr, k, n-1);
    // console.log("Array becomes : ", revNext);

    // TC : O(n)
    let revWholeArr = reverse(arr, 0, n-1);
    // console.log("Array becomes : ", revWholeArr);

    return arr;
}

// TC = O(k) + O(n-k) + O(n) => O(2n) => O(n)

let arr = [1,2,3,4,5,6]
console.log("Original Array : ", arr);

let revArr = LeftRotateArrayByKPlaces(arr, 11);
console.log("Reverse Array: ", revArr);


