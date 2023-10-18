/**Find the largest number
 * 
 * given an array find the largest number
 * 
 * getMax([5, 100, 0])
 * 
 */


/**
 * 
Initializing the variable to the first element of the array is a 
common and practical approach when finding the largest number in an array for a couple of reasons:

Starting Point: By initializing the variable to the first element of the array, 
you have a starting point for comparison. It provides an initial value to compare with 
the rest of the elements in the array. This is especially useful when you don't yet know the 
content of the array and need a point of reference.

Handling Empty Arrays: If the array is empty, setting the initial value to 
the first element ensures that you have a valid value to return. Without this initialization, 
attempting to find the largest number in an empty array could lead to errors.
 */



function getMax (arr) {
    let largest = arr[0]           // Initialize the variable to the first element of the array
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])       //check to see if we are looping through
        if (arr[i] > largest){   //Compare the current element to the current largest
          largest = arr[i];     // Update the largest if the current element is greater
        }
    }
    return largest
}

console.log(getMax([5, 1000, 0, 9]));