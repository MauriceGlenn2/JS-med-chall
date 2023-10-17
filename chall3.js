/**
 * get last elem in array
 * lastElem([2, 3, 3, 3, 5]) -> 5
 */

function lastElem (elem) {
    return elem[elem.length - 1]; // use [] to target indexes
}
console.log(lastElem([2, 3, 3, 3, 4]));