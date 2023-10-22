
/**
 * Truthy to true, Falsy to false
 * Givenan array of truthy and falsy values, return the same array of elements into its boolean
 * value
 * convertToBoolean([500, 0, 'david','',[]]) -> [T, F, T, F, T]
 */


//map is used to converting elements
function convertToBoolean(arr) {
  return arr.map(element => !!element)
}

console.log(convertToBoolean([500, 0, "david", "", []]));
