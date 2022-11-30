const zeros = [1, {}, "a", 2, 0, 3, 0, 0, "a", 0, 0, 0, 1];
//we need do create function which takes zeros from array and puts it behind

//first create function which takes an array
function moveZeros(array) {
  //create an empty array which will be returned later
  var newArray = [];
  //looping through an given array and filtering it
  for (let i = 0; i < array.length; i++) {
    //if given value is more than 0, is a string, an , object, null or boolean it will be pushed first
    if (
      array[i] > 0 ||
      typeof array[i] === "string" ||
      typeof array[i] === "object" ||
      typeof array[i] === "null" ||
      typeof array[i] === "boolean"
    ) {
      newArray.push(array[i]);
    }
  }
  //second we need to add all the zeros behind so we make another loop to go over the given array one more time
  for (let i = 0; i < array.length; i++) {
    //if current element is equal to 0 it will be pushed
    if (array[i] === 0) {
      newArray.push(0);
    }
  }
  //returning array which took two filters
  return newArray;
}

console.log(moveZeros(zeros));
