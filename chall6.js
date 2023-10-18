/**
 * Calculate the time
 * given a number in seconds, return this number in mm:ss
 * 
 * calcTime(66) -> '01:06'
 * calcTime(50) -> '00:50'
 * calcTime(300) -> '05:00'
 * 
 */

function calcTime (sec) {
    let timerMinutes = Math.floor(sec / 60) //calc mins and use Math.floor to remove decemals
    let timerSeconds = sec % 60           //seconds left over in remainder
    
    if  (timerMinutes.toString().length === 1) { //if length is 1 we add a "0"
        timerMinutes = "0" + timerMinutes
    }

    return timerMinutes + ":" + timerSeconds
}

console.log(calcTime(70))