/**
 * Falsey or truthy
 * given two values, return the first one if its falsey
 * other wise return the second one
 * 
 * filterOutFalsy(0, 500) --> 0
 * filterOutFalsy(false, 500) --> false
 * filterOutFalsy([true, 'dog']) --> 'dog'
 */

function filterOutFalsy (val1, val2) {
    return !val1 ? val1 : val2
}
console.log(filterOutFalsy(0, 500))