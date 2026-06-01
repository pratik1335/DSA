// Rotate Array by one place (Right rotate)

function rightRotatebyOnePlace(arr){
    if(!arr.length){
        return [];
    }else{
        let temp = arr[arr.length - 1];

        for(let i = 0; i < arr.length - 1; i++){
            arr[i+1] = arr[i];
        }

        arr[0] = temp;

        return arr;
    }  
}

let arr = [1,2,3,4,5,6];
// let arr = [-1,2,-3,4,5,-6];
// let arr = [1,1];
// let arr = [];

console.log("Original Array: ", arr);

let rigthRotatedArray = rightRotatebyOnePlace(arr);

console.log("Right Rotated array: ",rigthRotatedArray);


