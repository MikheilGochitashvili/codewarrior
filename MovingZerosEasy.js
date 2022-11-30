const zeros = [true, false, null, 1,2,3,0,1,0,2,2,0]
//same movezeros function but typed easly and took only 9 lines
var moveZeros = function (arr) {
    //returning array
    return [ //function is returned at typed at the same time
        //first we filter array that if number is not equal to 0 it will be added to the front of the array
        ...(arr.filter(n => n !== 0)),
        //second we filter array by if n is not equal to 0
        ...(arr.filter(n => n === 0))
    ]
}

console.log(moveZeros(zeros))
