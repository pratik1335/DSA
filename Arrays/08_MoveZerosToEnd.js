// Move zeros to end

// Important Rule : The order of the non-zero elements must remain the same.

// What we want: 
// All non-zero numbers first
// All zeros at the end

// Brute force : create two arrays
// Time : O(n)
// Space : O(n) -> extra array
function bruteMoveZerosToEnd(arr){
    let nonZeros = []
    let zeros = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0)
            zeros.push(arr[i]);
        else
            nonZeros.push(arr[i]);
    }
    
    return [...nonZeros, ...zeros];
}


// Better Approach : using two pointers
// We only care about the placing of non-zero elements

function betterMoveZerosToEnd(arr){
    // i = position where the next non-zero should go
    // j = traverse array
    let i = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[j] != 0){
            arr[i] = arr[j];
            i++;
        }
    }

    // After phase 1 : [1,2,3,4,3,0,4,0] -> i = 3
    // the first i elements are correct.
    // Everything after that can be replaced with 0

    for(let j = i; j < arr.length; j++){
        arr[j] = 0;
    }
    return arr;
}

let arr = [1,0,2,0,3,0,4,0,5,0,0,6,0,0,0,0,7,8,9];

console.log("Original Array : ", arr);

// console.log("New Array", bruteMoveZerosToEnd(arr));

console.log("New Array", betterMoveZerosToEnd(arr));


