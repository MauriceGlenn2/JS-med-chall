/**
 * add up the numbers from a single number
 * given a number, add up all the numbers from one to the number that is given
 * ex an input of 4 will give you 1+2+3+4, which equals 10
 * 
 * progressiveSum(3) -> 6
 * progressiveSum(4) -> 10
 * progressiveSum(600) -> 180300
 */

//whever you hear sum, you need to create a new variable

function progressiveSum (num) {
    let sum = 0
    for (let i = 1; i <= num; i++) { //add an extra inderation using  <=
        sum += i;
    }
        return sum      
}

console.log(progressiveSum(3))