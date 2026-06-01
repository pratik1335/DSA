// Rotate Array by one place (Right rotate)

function rightRotatebyOnePlace(arr){
    if(!arr.length){
        return [];
    }else{
        let temp = arr[arr.length - 1];

        for(let i = arr.length - 1; i > 0; i--){
            arr[i] = arr[i-1];
        }

        arr[0] = temp;

        return arr;
    }  
}

// let arr = [1,2,3,4,5,6];
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let arr = [-1,2,-3,4,5,-6];
// let arr = [1,1];
// let arr = [];

console.log("Original Array: ", arr);

let rigthRotatedArray = rightRotatebyOnePlace(arr);

console.log("Right Rotated array: ",rigthRotatedArray);


// Pattern Recognition
// Right Rotate
// 1. Save last
// 2. Shift Right
// 3. Put at beginning