// Smallest Element in an Array

// Optimal approach

// keep track of the largest number while traversing
function smallestElement(myArray){
    // handle empty array case
    if(!myArray.length){
        return -1;
    }

    let min = myArray[0];

    // start from i = 1, because min already contains i = 0
    for(let i = 1; i <= myArray.length; i++){
        if(myArray[i] < min)
            min = myArray[i];
    }

    return min;
}

// let arr_2 = [2, 4, 7, 10, 90, 10, 8, 25]
// let arr_2 = [2, 4, 7, 10, 90, -10, -8, 25]
// let arr_2 = [-2, -4, -7, -10, -90, -10, -8, -25]
// let arr_2 = []
let arr_2 = [2, 4, 7, 10, 90, -10, -8, 25, 7, 10]


smallestElement = smallestElement(arr_2);
console.log(smallestElement);