//1. Rotate array n times

let arr = [1, 2, 3, 4, 5];
let n = 0;

//result should be [3, 4, 5, 1, 2]

//creating a function which will rotate given array n times
function Rotate (array, n) {
    //define a loop which will loop over the given array n times
    for(let i = 0; i < n; i++){
        //define a variable whos value is going to be the last item of array (each loop it is going to be different value)
        var lastItem = array.pop();
        //then unshift it to the array
        array.unshift(lastItem)
    }
    //last we will be returning the final rotated array
    return array
}
//check
console.log(Rotate(arr, n))