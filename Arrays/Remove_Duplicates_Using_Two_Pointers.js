// Remove Duplicates in a sorted Array using two pointers.

// Approach: in a sorted array, duplicates will be adjacent.
// Duplicate -> ignore
// Unique -> move i

function removeDuplicate(arr){
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        // Unique -> move i
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

let arr = [1,2,2,3,3,4,4,5,5,5,6,7,8,9,9,9,10,10,10];

let k = removeDuplicate(arr);
console.log(arr.splice(0, k));