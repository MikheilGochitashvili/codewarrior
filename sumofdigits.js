/*
Given n, take the sum of the digits of n. 
If that value has more than one digit, 
continue reducing in this way until a 
single-digit number is produced. 
The input will be a non-negative integer.
*/

function digitalRoot(n) {
    // returning value if it's length is less than 2
  if(n < 10){
    return n
  }
  //if length is greater than 2 we need to do this function
  while(n > 9){
    // turning value (n) into the string and then pushing it into the array of numbers
    let number = n.toString().split('').map(Number)
    //looping thru the array and getting the final total
    n = number.reduce((sum, value) => sum + value)
  }
  return n
}

console.log(digitalRoot(493193));