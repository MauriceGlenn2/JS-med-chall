/**
 * Filter out all falsey values
 * 
 * filterOutFalsey(["", [], null, undefined, "0"]) -> [[], '0]
 * filterOutFalsey(["Tomato", "orange", "ban", false]) -> ["Tomato", "orange", "ban"]
 */

//filter
function filterOutFalsey (arr) {
  return arr.filter((elem) => !elem); // !! shows value true or false, ! shows opposite
}
console.log(filterOutFalsey(["Tomato", "orange", "ban", false]));


//for loop
function filterOut (arr1){
    let noFalse = []
    for(let i = 0; i < arr1.length; i++){
        if (!!arr1[i] === true) {
            noFalse.push(arr1[i]);
        }
    }
    return noFalse
}
console.log(filterOut(["Tomato", "orange", "ban", false]));

