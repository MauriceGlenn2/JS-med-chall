/**
 * Reverse a string
 * 
 * given a string , return the reversed string
 * reverseString('abc') -> 'cba'
 * 
 */


//incermenting for loop
function reverseString (str) {
    let reversedString = "";
    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
        reversedString = str[i] + reversedString
    }
    return reversedString

}

console.log(reverseString('abc'))


//decermenting for loop
// function reverseString(str) {
//   let reversedString = "";
//   for (let i = str.length - 1 ; i >= 0; --i) {
//     console.log(str[i]);
//     reversedString += str[i]
//   }
//   return reversedString
  
// }

// console.log(reverseString("abc"));


//reverse an array
console.log('abc'.split('')) // prints a string into an array ['a', 'b', 'c']
console.log('abc'.split('').reverse()) //reverses an array ['c', 'b', 'a']
console.log("abc".split("").reverse().join('')); //reverse array, converts back to string

function reverseStr (string) {
    return string.split('').reverse().join('')
}
console.log(reverseStr('abc'))