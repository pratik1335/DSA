// Second Largest 

// Core skill : Tracking multiple variables correctly.

function secondLargest(myArray){
    // checking empty array case
    if(!myArray.length){
        return 0;
    }

    let max = myArray[0];

    // Corner case
    // let second_max = -1; // will not work for all the -ve numbers
    let second_max = -Infinity; // will work for all the -ve and +ve numbers
    
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
let arr = [-18, -34, -67, -32, -56, -43, -90, -100, -42]
// let arr = [-4, -9, -9, -18, -34]
// let arr = []

console.log(secondLargest(arr));


// Note : Duplicate handling : myArray[i] != max


