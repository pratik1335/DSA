// Second Largest 

// Core skill : Tracking multiple variables correctly.

function secondLargest(myArray){
    let max = myArray[0];
    let second_max = max;

    for(let i = 1; i < myArray.length; i++){
        if(myArray[i] > max){
            second_max = max;
            max = myArray[i]
        }
        else if(myArray[i] != max && myArray[i] > second_max){
            second_max = myArray[i];
        }
    }

    return second_max;
}

// let arr = [4, 9, 9]
// let arr = [4, 9, 9, 18, 34, 67, 32, 56, 43, 90, -100, 42]
// let arr = [-4, -9, -9, -18, -34, -67, -32, -56, -43, -90, -100, -42]
let arr = [-4, -9, -9, -18, -34]

console.log(secondLargest(arr));


// Note : Duplicate handling : myArray[i] != max


