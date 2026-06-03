// 1. Brute force : rotating one place k times.
// Left rotate by 2 place
// Rotate by 2 = Rotate by 1 + Rotate by 1 

// Left Rotate by k place = O(n * k) -> k times
// step 1 : left rotate by 1 place
// step 2 : call it k times. where k = k % n

function leftRotatebyOnePlace(arr){
    if(!arr.length){
        return [];
    }else{

        let temp = arr[0];
        
        for(let i = 0; i < arr.length - 1; i++){
            arr[i] = arr[i+1];
        }
        
        arr[arr.length-1] = temp;

        return arr;
    }

}

// Note: important concept, use k % n in place of k
/*
    I/P : [1,2,3,4,5]
    k = 7 (rotate 7 times)
    n = 5 (array length)

    O/P = [3,4,5,1,2]

    7 = 5 + 2

    Rotating left by 5 places gives the same array [1,2,3,4,5]

    7 rotations = 5 rotations + 2 rotations = 0 rotations + 2 rotations = 2 rotations

    So the concept is that instead of k, use k % n;

    7 % 5 = 2 so rotate by 7 becomes rotate by 2

    Example : n = 5, k = 12 => k%n = 12%5 = 2 so rotate by 12 becomes rotate by 2

*/

function leftRotatebyKPlace(arr, k){
    // let n = arr.length;
    // let k = k % n;

    for(let i = 0; i < k % arr.length; i++){
        leftRotatebyOnePlace(arr);
    }

    return arr;
}

let arr = [1,2,3,4,5,6];

console.log("Original Array: ", arr);

let leftRotatedArrayByKPlace = leftRotatebyKPlace(arr, 18);

console.log("Left Rotated array: ",leftRotatedArrayByKPlace);

