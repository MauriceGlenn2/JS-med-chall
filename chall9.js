/**
 * Turn every element in an array to 0
 * 
 * convertToZeros([5, 100, 0]) -> [0. 0, 0]
 * 
 */
//^^^^^Theres 2 ways to change an array, push and map^^^^^
function convertToZeros (arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 0)
    }
    return newArr
}

console.log(convertToZeros([5, 100, 0]));


function convertZeros(arrr) {
  for (let i = 0; i < arrr.length; i++) {
    arrr[i] = 0;
  }
  return arrr;
}

console.log(convertZeros([5, 100, 0]));


//using fill
function convert (ar) {
    const zeroes = new Array(ar.length).fill(0)
    return zeroes
}

console.log(convert([5, 100, 5, 7]))

//map
function converson(ranArr) {
  return ranArr.map(element => 0);
}
console.log(converson([5, 100, 5, 7]));
