/**
 * find sum of an array
 * arrSum([2, 2, 2]) -> 6
 * 
 */

//whenever we need to use each elem in an array we have to loop through

function arrSum (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++){  //length runs the loop the length of the array
        sum += arr[i] // same as sum = sum + arr[i]
    }
    return sum
}

console.log(arrSum([2, 2, 2]))