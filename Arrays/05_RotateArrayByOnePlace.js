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
    }

    return arr;
}

// let arr = [1,2,3,4,5,6];
let arr = [-1,2,-3,4,5,-6];
// let arr = [1,1];
// let arr = [];

console.log("Original Array: ", arr);

let rotatedArray = leftRotatebyOnePlace(arr);

console.log("Rotated array: ",rotatedArray);


