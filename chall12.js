
let newArr = []
function filterOut(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i]);
    if (arr1[i] === !arr1[i]){
        newArr.push(arr1[i])
    }
  }
  return newArr
}
console.log(filterOut(["Tomato", "orange", "ban", false]));
