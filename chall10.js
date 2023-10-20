/**
 * Filter out all the apples
 * 
 * removeApples(['banana', "apple", 'orange']) -> ["banana", 'orange']
 * 
 */


//filter
function removeApples (arr){
     return arr.filter(elem => elem !== "Apple");
}
console.log(removeApples(["banana", "Apple", "orange"]));


//for loop
//when filtering using for loop, you need to creat a new array
let newArr = []
function zeroApples (fruits) {
for (let i = 0; i < fruits.length; i++ ){
    if (fruits[i] !== "Apple"){
        newArr.push(fruits[i])
    };
}
    return newArr
}
console.log(zeroApples(["banana", "Apple", "orange"]));