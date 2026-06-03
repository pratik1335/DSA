// Rotate Array by one place (left rotate)

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

// let arr = [1,2,3,4,5,6];
let arr = [-1,2,-3,4,5,-6];
// let arr = [1,1];
// let arr = [];

console.log("Original Array: ", arr);

let leftRotatedArray = leftRotatebyOnePlace(arr);

console.log("Left Rotated array: ",leftRotatedArray);


// Pattern Recognition
// Left Rotate
// 1. Save first
// 2. Shift Left
// 3. Put at end


// Note: Brute force
// Rotate by 2 = Rotate by 1 + Rotate by 1
// Rotate by 3 = Rotate by 1 + Rotate by 1 + Rotate by 1